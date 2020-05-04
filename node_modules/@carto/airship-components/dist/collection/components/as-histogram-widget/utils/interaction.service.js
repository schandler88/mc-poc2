import { event as d3event, select } from 'd3-selection';
import { shadeOrBlend } from '../../../utils/styles';
export function addTooltip(container, barsContainer, hasSelection, color, unselectedColor, formatter, setTooltip, className) {
    container.on('mousemove', () => {
        const evt = d3event;
        const { clientX, clientY } = evt;
        let anyHovered = false;
        _forEachRect(barsContainer, clientX, clientY, className, async (data, node, bucketIndex, boundingBox) => {
            const selected = _isSelected(hasSelection.selection, bucketIndex);
            let _color = selected ? data.color || color : unselectedColor;
            _color = shadeOrBlend(-0.16, _color);
            node.style('fill', _color);
            const tooltip = await formatter(data);
            setTooltip(tooltip, boundingBox, evt);
            anyHovered = true;
        }, (data, node, bucketIndex) => {
            const selected = _isSelected(hasSelection.selection, bucketIndex);
            node.style('fill', selected ? data.color || color : unselectedColor);
        });
        if (!anyHovered) {
            setTooltip(null, null);
        }
    })
        .on('click', () => {
        const evt = d3event;
        const { clientX, clientY } = evt;
        _forEachRect(barsContainer, clientX, clientY, className, (data) => {
            hasSelection.setSelection([data.start, data.end], true);
        });
    })
        .on('mouseleave', () => {
        setTooltip(null, null);
        barsContainer.selectAll(`rect.${className}`)
            .style('fill', (data, bucketIndex) => {
            if (_isSelected(hasSelection.selection, bucketIndex)) {
                return data.color || color;
            }
            return unselectedColor;
        });
    });
}
function _isSelected(range, bucketIndex) {
    if (range === null) {
        return true;
    }
    return bucketIndex >= range[0] && bucketIndex < range[1];
}
/**
 * Cycles through all rects in container, fires a callback for the rect that contains the x / y points,
 * and fires another (optional) callback for the rest of the containers
 *
 * @param {SVGGContainer} container Container that contains rect elements
 * @param {number} x X coordinate to check whether is contained or not
 * @param {number} y Y coordinate to check whether is contained or not
 * @param {RectCallback} insideCallback Callback fired with data of bucket that contains the point
 * @param {RectCallback} [outsideCallback] Callback fired with data of buckets that don't contain the point
 */
function _forEachRect(container, x, y, className, insideCallback, outsideCallback) {
    container.selectAll(`rect.${className}`)
        .each((data, i, nodes) => {
        const nodeSelection = select(nodes[i]);
        const node = nodes[i];
        const bb = node.getBoundingClientRect();
        const isInsideBB = bb.left <= x &&
            x <= bb.right &&
            bb.top <= y &&
            y <= bb.bottom;
        if (isInsideBB) {
            insideCallback(data, nodeSelection, i, bb);
            return;
        }
        if (outsideCallback) {
            outsideCallback(data, nodeSelection, i, null);
        }
    });
}
export default { addTooltip };
