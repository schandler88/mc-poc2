import { r as registerInstance, h } from './core-a69618da.js';

const LoadingBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection(),
            this.renderBarSection()
        ];
    }
    renderBarSection() {
        const barPercentage = Math.trunc(Math.random() * 60) + 40;
        return (h("div", { class: 'placeholder-list__items' }, h("as-placeholder-bar", { class: 'placeholder-list__item placeholder-list__item--first', height: '12px', width: `${barPercentage}%` }), h("as-placeholder-bar", { class: 'placeholder-list__item', height: '4px', width: '100%' })));
    }
    static get style() { return ".placeholder-list__items:not(:last-child){margin-bottom:12px}.placeholder-list__item{display:block}.placeholder-list__item.placeholder-list__item--first{margin-bottom:8px}"; }
};

export { LoadingBar as as_placeholder_list };
