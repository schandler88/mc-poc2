webpackJsonp([10],{161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"AsApplicationContent",function(){return o});var i=n(44),o=function(){function t(){this.sections=[]}return t.prototype.render=function(){return[this.renderTabs(),this.renderContent()]},t.prototype.renderContent=function(){return i.b("main",{class:"as-app-content"},i.b("slot",null))},t.prototype.componentWillLoad=function(){this.sections=this.getContentSections()},t.prototype.componentDidLoad=function(){this.load.emit()},t.prototype.getSections=function(){return this.sections},t.prototype.setVisible=function(t){var e=this.sections.find(function(e){return e.name===t});e&&this.setActive(e)},t.prototype.renderTabs=function(){var t=this,e=this.sections.map(function(e,n){if(e.element){var o={"as-tabs__item":!0,"as-tabs__item--active":e.active};return i.b("button",{onClick:function(){return t.setActive(e)},role:"tab",class:o},e.name||n)}});return i.b("div",{role:"tablist",class:"as-toolbar-tabs as-tabs as-tabs--xl"},e)},t.prototype.setActive=function(t){t.active||(this.disableActiveSection(),t.activeAction?t.activeAction(t):(t.element.classList.add(t.activeClass||a[t.type]),t.active=!0),this.activeSection=t,this.sections=this.sections.slice(),this.sectionChange.emit(t))},t.prototype.disableActiveSection=function(){this.activeSection&&(this.activeSection.disableAction?this.activeSection.disableAction(this.activeSection):(this.activeSection.element.classList.remove(this.activeSection.activeClass||a[this.activeSection.type]),this.activeSection.active=!1))},t.prototype.getContentSections=function(){var t=[this.getMap()].concat(this.getSidebars(),this.getPanels(),[this.getBottomBar()]);return t.length&&(t.sort(function(t,e){return t.tabOrder-e.tabOrder}),this.setActive(t[0])),t},t.prototype.getMap=function(){var t=this.element.querySelector(".as-map-wrapper");return{activeAction:function(t){t.active=!0},disableAction:function(t){t.active=!1},element:t,name:t.getAttribute("data-name")||"Map",tabOrder:t.getAttribute("data-tab-order")||0,type:"map"}},t.prototype.getSidebars=function(){return Array.from(this.element.querySelectorAll(".as-sidebar")).map(function(t,e){return{activeClass:"as-sidebar--visible",element:t,name:t.getAttribute("data-name")||"Sidebar "+e,tabOrder:t.getAttribute("data-tab-order")||0,type:"sidebar"}})},t.prototype.getPanels=function(){return Array.from(this.element.querySelectorAll(".as-panels")).map(function(t,e){return{element:t,name:t.getAttribute("data-name")||"Panel "+e,tabOrder:t.getAttribute("data-tab-order")||0,type:"panels"}})},t.prototype.getBottomBar=function(){var t=this.element.querySelector(".as-bottom-bar");return{element:t,name:t&&t.getAttribute("data-name")||"Bottom Bar",tabOrder:t&&t.getAttribute("data-tab-order")||0,type:"bottomBar"}},Object.defineProperty(t,"is",{get:function(){return"as-application-content"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{element:{elementRef:!0},getSections:{method:!0},sections:{state:!0},setVisible:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"load",method:"load",bubbles:!0,cancelable:!0,composed:!0},{name:"sectionChange",method:"sectionChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);@import url(https://fonts.googleapis.com/css?family=Overpass+Mono|Roboto:300,400,500,700);as-application-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"},enumerable:!0,configurable:!0}),t}(),a={bottomBar:"as-bottom-bar--visible",panels:"as-panels--visible"}}});
//# sourceMappingURL=10.bundle.js.map