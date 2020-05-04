import { h } from "@stencil/core";
export class LoadingBar {
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
        return (h("div", { class: 'placeholder-list__items' },
            h("as-placeholder-bar", { class: 'placeholder-list__item placeholder-list__item--first', height: '12px', width: `${barPercentage}%` }),
            h("as-placeholder-bar", { class: 'placeholder-list__item', height: '4px', width: '100%' })));
    }
    static get is() { return "as-placeholder-list"; }
    static get originalStyleUrls() { return {
        "$": ["./as-placeholder-list.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-placeholder-list.css"]
    }; }
}
