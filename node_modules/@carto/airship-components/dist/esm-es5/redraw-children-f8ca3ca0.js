/**
 * This function queries an element for certain types of airship elements
 * that support an explicit redraw, and calls it.
 *
 * @param element Element where to look for redrawable children
 */
function redrawChildren(element) {
    var allChildren = element.querySelectorAll('*');
    for (var _i = 0, allChildren_1 = allChildren; _i < allChildren_1.length; _i++) {
        var child = allChildren_1[_i];
        var isAirshipElement = child.tagName.toLowerCase().indexOf('as-') === 0 && child.forceUpdate;
        if (isAirshipElement) {
            child.forceUpdate();
        }
    }
}
export { redrawChildren as r };
