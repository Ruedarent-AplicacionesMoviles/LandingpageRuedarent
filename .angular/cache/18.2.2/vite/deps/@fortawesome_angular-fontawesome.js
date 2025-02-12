import {
  DomSanitizer
} from "./chunk-FUVJ5W6M.js";
import {
  config$1,
  counter,
  dom$1,
  icon,
  parse$1,
  text
} from "./chunk-6IUMONAD.js";
import {
  DOCUMENT
} from "./chunk-3MVSWI6V.js";
import {
  Component,
  Directive,
  ElementRef,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Optional,
  Renderer2,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵsanitizeHtml
} from "./chunk-2CTYAOYR.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@fortawesome/angular-fontawesome/fesm2022/angular-fontawesome.mjs
var _c0 = ["*"];
var faWarnIfIconDefinitionMissing = (iconSpec) => {
  throw new Error(`Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix} in the icon library.`);
};
var faWarnIfIconSpecMissing = () => {
  throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.");
};
var faClassList = (props) => {
  const classes = {
    [`fa-${props.animation}`]: props.animation != null && !props.animation.startsWith("spin"),
    "fa-spin": props.animation === "spin" || props.animation === "spin-reverse",
    "fa-spin-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-spin-reverse": props.animation === "spin-reverse" || props.animation === "spin-pulse-reverse",
    // According to https://fontawesome.com/docs/web/style/animate#spin fa-pulse
    // class is deprecated, remove the below line when Font Awesome 5 support
    // is dropped.
    "fa-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-inverse": props.inverse,
    "fa-layers-counter": props.counter,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotate}`]: props.rotate !== null,
    [`fa-pull-${props.pull}`]: props.pull !== null,
    [`fa-stack-${props.stackItemSize}`]: props.stackItemSize != null
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
};
var cssInserted = /* @__PURE__ */ new WeakSet();
var autoCssId = "fa-auto-css";
function ensureCss(document, config) {
  if (!config.autoAddCss) {
    return;
  }
  if (cssInserted.has(document)) {
    return;
  }
  if (document.getElementById(autoCssId) != null) {
    config.autoAddCss = false;
    cssInserted.add(document);
    return;
  }
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("id", autoCssId);
  style.innerHTML = dom$1.css();
  const headChildren = document.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = child.nodeName.toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  document.head.insertBefore(style, beforeChild);
  config.autoAddCss = false;
  cssInserted.add(document);
}
var isIconLookup = (i) => i.prefix !== void 0 && i.iconName !== void 0;
var faNormalizeIconSpec = (iconSpec, defaultPrefix) => {
  if (isIconLookup(iconSpec)) {
    return iconSpec;
  }
  if (Array.isArray(iconSpec) && iconSpec.length === 2) {
    return {
      prefix: iconSpec[0],
      iconName: iconSpec[1]
    };
  }
  return {
    prefix: defaultPrefix,
    iconName: iconSpec
  };
};
var _FaConfig = class _FaConfig {
  constructor() {
    this.defaultPrefix = "fas";
    this.fallbackIcon = null;
    this._autoAddCss = true;
  }
  /**
   * Automatically add Font Awesome styles to the document when icon is rendered.
   *
   * For the majority of the cases the automatically added CSS is sufficient,
   * please refer to the linked guide for more information on when to disable
   * this feature.
   *
   * @see {@link: https://github.com/FortAwesome/angular-fontawesome/blob/main/docs/guide/adding-css.md}
   * @default true
   */
  set autoAddCss(value) {
    config$1.autoAddCss = value;
    this._autoAddCss = value;
  }
  get autoAddCss() {
    return this._autoAddCss;
  }
};
_FaConfig.ɵfac = function FaConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaConfig)();
};
_FaConfig.ɵprov = ɵɵdefineInjectable({
  token: _FaConfig,
  factory: _FaConfig.ɵfac,
  providedIn: "root"
});
var FaConfig = _FaConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _FaIconLibrary = class _FaIconLibrary {
  constructor() {
    this.definitions = {};
  }
  addIcons(...icons) {
    for (const icon2 of icons) {
      if (!(icon2.prefix in this.definitions)) {
        this.definitions[icon2.prefix] = {};
      }
      this.definitions[icon2.prefix][icon2.iconName] = icon2;
      for (const alias of icon2.icon[2]) {
        if (typeof alias === "string") {
          this.definitions[icon2.prefix][alias] = icon2;
        }
      }
    }
  }
  addIconPacks(...packs) {
    for (const pack of packs) {
      const icons = Object.keys(pack).map((key) => pack[key]);
      this.addIcons(...icons);
    }
  }
  getIconDefinition(prefix, name) {
    if (prefix in this.definitions && name in this.definitions[prefix]) {
      return this.definitions[prefix][name];
    }
    return null;
  }
};
_FaIconLibrary.ɵfac = function FaIconLibrary_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaIconLibrary)();
};
_FaIconLibrary.ɵprov = ɵɵdefineInjectable({
  token: _FaIconLibrary,
  factory: _FaIconLibrary.ɵfac,
  providedIn: "root"
});
var FaIconLibrary = _FaIconLibrary;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconLibrary, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _FaStackItemSizeDirective = class _FaStackItemSizeDirective {
  constructor() {
    this.stackItemSize = "1x";
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.');
    }
  }
};
_FaStackItemSizeDirective.ɵfac = function FaStackItemSizeDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaStackItemSizeDirective)();
};
_FaStackItemSizeDirective.ɵdir = ɵɵdefineDirective({
  type: _FaStackItemSizeDirective,
  selectors: [["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]],
  inputs: {
    stackItemSize: "stackItemSize",
    size: "size"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var FaStackItemSizeDirective = _FaStackItemSizeDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackItemSizeDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]",
      standalone: true
    }]
  }], null, {
    stackItemSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _FaStackComponent = class _FaStackComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
};
_FaStackComponent.ɵfac = function FaStackComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaStackComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
_FaStackComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaStackComponent,
  selectors: [["fa-stack"]],
  inputs: {
    size: "size"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FaStackComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FaStackComponent = _FaStackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackComponent, [{
    type: Component,
    args: [{
      selector: "fa-stack",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var _FaIconComponent = class _FaIconComponent {
  constructor(sanitizer, config, iconLibrary, stackItem, stack) {
    this.sanitizer = sanitizer;
    this.config = config;
    this.iconLibrary = iconLibrary;
    this.stackItem = stackItem;
    this.document = inject(DOCUMENT);
    if (stack != null && stackItem == null) {
      console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.');
    }
  }
  ngOnChanges(changes) {
    if (this.icon == null && this.config.fallbackIcon == null) {
      faWarnIfIconSpecMissing();
      return;
    }
    if (changes) {
      const iconDefinition = this.findIconDefinition(this.icon ?? this.config.fallbackIcon);
      if (iconDefinition != null) {
        const params = this.buildParams();
        ensureCss(this.document, this.config);
        const renderedIcon = icon(iconDefinition, params);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html.join("\n"));
      }
    }
  }
  /**
   * Programmatically trigger rendering of the icon.
   *
   * This method is useful, when creating {@link FaIconComponent} dynamically or
   * changing its inputs programmatically as in these cases icon won't be
   * re-rendered automatically.
   */
  render() {
    this.ngOnChanges({});
  }
  findIconDefinition(i) {
    const lookup = faNormalizeIconSpec(i, this.config.defaultPrefix);
    if ("icon" in lookup) {
      return lookup;
    }
    const definition = this.iconLibrary.getIconDefinition(lookup.prefix, lookup.iconName);
    if (definition != null) {
      return definition;
    }
    faWarnIfIconDefinitionMissing(lookup);
    return null;
  }
  buildParams() {
    const classOpts = {
      flip: this.flip,
      animation: this.animation,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth,
      stackItemSize: this.stackItem != null ? this.stackItem.stackItemSize : null
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      title: this.title,
      transform: parsedTransform,
      classes: faClassList(classOpts),
      mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
      symbol: this.symbol,
      attributes: {
        role: this.a11yRole
      }
    };
  }
};
_FaIconComponent.ɵfac = function FaIconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaIconComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(FaConfig), ɵɵdirectiveInject(FaIconLibrary), ɵɵdirectiveInject(FaStackItemSizeDirective, 8), ɵɵdirectiveInject(FaStackComponent, 8));
};
_FaIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaIconComponent,
  selectors: [["fa-icon"]],
  hostAttrs: [1, "ng-fa-icon"],
  hostVars: 2,
  hostBindings: function FaIconComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("innerHTML", ctx.renderedIconHTML, ɵɵsanitizeHtml);
      ɵɵattribute("title", ctx.title);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    animation: "animation",
    mask: "mask",
    flip: "flip",
    size: "size",
    pull: "pull",
    border: "border",
    inverse: "inverse",
    symbol: "symbol",
    rotate: "rotate",
    fixedWidth: "fixedWidth",
    transform: "transform",
    a11yRole: "a11yRole"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaIconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaIconComponent = _FaIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-icon",
      standalone: true,
      template: ``,
      host: {
        class: "ng-fa-icon",
        "[attr.title]": "title"
      }
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: FaConfig
  }, {
    type: FaIconLibrary
  }, {
    type: FaStackItemSizeDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FaStackComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    symbol: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    a11yRole: [{
      type: Input
    }],
    renderedIconHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FaDuotoneIconComponent = class _FaDuotoneIconComponent extends FaIconComponent {
  findIconDefinition(i) {
    const definition = super.findIconDefinition(i);
    if (definition != null && !Array.isArray(definition.icon[4])) {
      throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${definition.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${definition.iconName}"></fa-icon> instead.`);
    }
    return definition;
  }
  buildParams() {
    const params = super.buildParams();
    if (this.swapOpacity === true || this.swapOpacity === "true") {
      if (Array.isArray(params.classes)) {
        params.classes.push("fa-swap-opacity");
      } else if (typeof params.classes === "string") {
        params.classes = [params.classes, "fa-swap-opacity"];
      } else {
        params.classes = ["fa-swap-opacity"];
      }
    }
    if (params.styles == null) {
      params.styles = {};
    }
    if (this.primaryOpacity != null) {
      params.styles["--fa-primary-opacity"] = this.primaryOpacity.toString();
    }
    if (this.secondaryOpacity != null) {
      params.styles["--fa-secondary-opacity"] = this.secondaryOpacity.toString();
    }
    if (this.primaryColor != null) {
      params.styles["--fa-primary-color"] = this.primaryColor;
    }
    if (this.secondaryColor != null) {
      params.styles["--fa-secondary-color"] = this.secondaryColor;
    }
    return params;
  }
};
_FaDuotoneIconComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵFaDuotoneIconComponent_BaseFactory;
  return function FaDuotoneIconComponent_Factory(__ngFactoryType__) {
    return (ɵFaDuotoneIconComponent_BaseFactory || (ɵFaDuotoneIconComponent_BaseFactory = ɵɵgetInheritedFactory(_FaDuotoneIconComponent)))(__ngFactoryType__ || _FaDuotoneIconComponent);
  };
})();
_FaDuotoneIconComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaDuotoneIconComponent,
  selectors: [["fa-duotone-icon"]],
  inputs: {
    swapOpacity: "swapOpacity",
    primaryOpacity: "primaryOpacity",
    secondaryOpacity: "secondaryOpacity",
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor"
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaDuotoneIconComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaDuotoneIconComponent = _FaDuotoneIconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaDuotoneIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-duotone-icon",
      standalone: true,
      template: ``
    }]
  }], null, {
    swapOpacity: [{
      type: Input
    }],
    primaryOpacity: [{
      type: Input
    }],
    secondaryOpacity: [{
      type: Input
    }],
    primaryColor: [{
      type: Input
    }],
    secondaryColor: [{
      type: Input
    }]
  });
})();
var faWarnIfParentNotExist = (parent, parentName, childName) => {
  if (!parent) {
    throw new Error(`${childName} should be used as child of ${parentName} only.`);
  }
};
var _FaLayersComponent = class _FaLayersComponent {
  constructor(renderer, elementRef, config) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.config = config;
    this.document = inject(DOCUMENT);
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-layers");
    ensureCss(this.document, this.config);
    this.fixedWidth = typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth;
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
};
_FaLayersComponent.ɵfac = function FaLayersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaLayersComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FaConfig));
};
_FaLayersComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaLayersComponent,
  selectors: [["fa-layers"]],
  hostVars: 2,
  hostBindings: function FaLayersComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("fa-fw", ctx.fixedWidth);
    }
  },
  inputs: {
    size: "size",
    fixedWidth: "fixedWidth"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function FaLayersComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FaLayersComponent = _FaLayersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FaConfig
  }], {
    size: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.fa-fw"]
    }]
  });
})();
var _FaLayersCounterComponent = class _FaLayersCounterComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  buildParams() {
    return {
      title: this.title,
      classes: this.position != null ? [`fa-layers-${this.position}`] : void 0
    };
  }
  updateContent(params) {
    ensureCss(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(counter(this.content || "", params).html.join(""));
  }
};
_FaLayersCounterComponent.ɵfac = function FaLayersCounterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaLayersCounterComponent)(ɵɵdirectiveInject(FaLayersComponent, 8), ɵɵdirectiveInject(DomSanitizer));
};
_FaLayersCounterComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaLayersCounterComponent,
  selectors: [["fa-layers-counter"]],
  hostAttrs: [1, "ng-fa-layers-counter"],
  hostVars: 1,
  hostBindings: function FaLayersCounterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("innerHTML", ctx.renderedHTML, ɵɵsanitizeHtml);
    }
  },
  inputs: {
    content: "content",
    title: "title",
    position: "position"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaLayersCounterComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaLayersCounterComponent = _FaLayersCounterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersCounterComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-counter",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-counter"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FaLayersTextComponent = class _FaLayersTextComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  /**
   * Updating params by component props.
   */
  buildParams() {
    const classOpts = {
      flip: this.flip,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: this.fixedWidth
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      transform: parsedTransform,
      classes: faClassList(classOpts),
      title: this.title
    };
  }
  updateContent(params) {
    ensureCss(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(text(this.content || "", params).html.join("\n"));
  }
};
_FaLayersTextComponent.ɵfac = function FaLayersTextComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FaLayersTextComponent)(ɵɵdirectiveInject(FaLayersComponent, 8), ɵɵdirectiveInject(DomSanitizer));
};
_FaLayersTextComponent.ɵcmp = ɵɵdefineComponent({
  type: _FaLayersTextComponent,
  selectors: [["fa-layers-text"]],
  hostAttrs: [1, "ng-fa-layers-text"],
  hostVars: 1,
  hostBindings: function FaLayersTextComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("innerHTML", ctx.renderedHTML, ɵɵsanitizeHtml);
    }
  },
  inputs: {
    content: "content",
    title: "title",
    flip: "flip",
    size: "size",
    pull: "pull",
    border: "border",
    inverse: "inverse",
    rotate: "rotate",
    fixedWidth: "fixedWidth",
    transform: "transform"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function FaLayersTextComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var FaLayersTextComponent = _FaLayersTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersTextComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-text",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-text"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var _FontAwesomeModule = class _FontAwesomeModule {
};
_FontAwesomeModule.ɵfac = function FontAwesomeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FontAwesomeModule)();
};
_FontAwesomeModule.ɵmod = ɵɵdefineNgModule({
  type: _FontAwesomeModule,
  imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
  exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
});
_FontAwesomeModule.ɵinj = ɵɵdefineInjector({});
var FontAwesomeModule = _FontAwesomeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontAwesomeModule, [{
    type: NgModule,
    args: [{
      imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
      exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
    }]
  }], null, null);
})();
export {
  FaConfig,
  FaDuotoneIconComponent,
  FaIconComponent,
  FaIconLibrary,
  FaLayersComponent,
  FaLayersCounterComponent,
  FaLayersTextComponent,
  FaStackComponent,
  FaStackItemSizeDirective,
  FontAwesomeModule
};
//# sourceMappingURL=@fortawesome_angular-fontawesome.js.map
