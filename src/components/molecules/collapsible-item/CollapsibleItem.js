import "../../atoms/icon-label/IconLabel.js";
/* empty css                                                              */
class CollapsibleItem extends HTMLLIElement {
  static get observedAttributes() {
    return ["expanded", "icon", "label", "removeshift", "hide-icon"];
  }
  constructor() {
    super();
    this._isExpanded = false;
    this._handleClick = this._handleClick.bind(this);
    this._header = null;
    this._content = null;
    this._initialRender = true;
    this._removeShift = false;
    this.rendered = false;
    this.classList.add("collapsible-item");
    if (this.hasAttribute("expanded")) {
      this._isExpanded = true;
      this.classList.add("collapsible-item--expanded");
    }
    if (this.hasAttribute("removeshift")) {
      this.classList.add("collapsible-item--no-padding");
    }
  }
  connectedCallback() {
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    if (!this.rendered) {
      this._render();
      this.rendered = true;
      this._addEventListeners();
      this._updateContentVisibility();
    }
    this.classList.add("collapsible-item");
    if (this.hasAttribute("expanded")) {
      this._isExpanded = true;
      this.classList.add("collapsible-item--expanded");
    } else {
      this._isExpanded = false;
      this.classList.remove("collapsible-item--expanded");
    }
  }
  disconnectedCallback() {
    this._removeEventListeners();
  }
  _addEventListeners() {
    this.addEventListener("click", this._handleClick);
  }
  _removeEventListeners() {
    this.removeEventListener("click", this._handleClick);
  }
  _handleClick(event) {
    const header = event.target.closest(".collapsible-item__header");
    if (!header) return;
    event.preventDefault();
    event.stopPropagation();
    const isExpanding = !this.hasAttribute("expanded");
    if (isExpanding) {
      this.setAttribute("expanded", "");
    } else {
      this.removeAttribute("expanded");
    }
    this._isExpanded = isExpanding;
    this._updateContentVisibility();
    this.dispatchEvent(new CustomEvent("toggle", {
      detail: { expanded: isExpanding },
      bubbles: true,
      composed: true
    }));
  }
  _createHeader() {
    const header = document.createElement("div");
    header.className = "collapsible-item__header";
    header.style.position = "relative";
    
    const contentWrapper = document.createElement("div");
    contentWrapper.style.display = "flex";
    contentWrapper.style.alignItems = "center";
    contentWrapper.style.flex = "1";
    contentWrapper.style.position = "relative";
    contentWrapper.style.zIndex = "1";
    
    // Add Frame4 as inline SVG
    const svgWrapper = document.createElement("div");
    svgWrapper.className = "collapsible-item__frame-icon";
    svgWrapper.style.position = "absolute";
    svgWrapper.style.top = "0";
    svgWrapper.style.left = "0";
    svgWrapper.style.width = "100%";
    svgWrapper.style.height = "100%";
    svgWrapper.style.overflow = "hidden";
    svgWrapper.style.zIndex = "-1";
    
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("viewBox", "0 0 817 101");
    svg.setAttribute("fill", "none");
    
    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("d", "M807 78.5V18L116 17.5L108.5 10H98.5H25V91H794.5L807 78.5Z");
    path1.setAttribute("fill", "#B30000");
    path1.setAttribute("fill-opacity", "0.4");
    
    const g1 = document.createElementNS(svgNS, "g");
    g1.setAttribute("id", "Path_2");
    
    const mask = document.createElementNS(svgNS, "mask");
    mask.setAttribute("id", "path-2-inside-1_322_9");
    mask.setAttribute("fill", "white");
    
    const maskPath = document.createElementNS(svgNS, "path");
    maskPath.setAttribute("d", "M807 18V78.5L794.5 91H25H10V75H13V49H10V10H25H98.5H108.5L116 17.5L807 18Z");
    
    const path2 = document.createElementNS(svgNS, "path");
    path2.setAttribute("d", "M25 91H26V10H25H24V91H25ZM807 18H809V16.0014L807.001 16L807 18ZM807 78.5L808.414 79.9142L809 79.3284V78.5H807ZM794.5 91V93H795.328L795.914 92.4142L794.5 91ZM116 17.5L114.586 18.9142L115.171 19.4994L115.999 19.5L116 17.5ZM108.5 10L109.914 8.58579L109.328 8H108.5V10ZM10 49H8V51H10V49ZM10 10V8H8V10H10ZM10 91H8V93H10V91ZM10 75V73H8V75H10ZM13 49H15V47H13V49ZM13 75V77H15V75H13ZM807 18H805V78.5H807H809V18H807ZM807 78.5L805.586 77.0858L793.086 89.5858L794.5 91L795.914 92.4142L808.414 79.9142L807 78.5ZM116 17.5L115.999 19.5L806.999 20L807 18L807.001 16L116.001 15.5L116 17.5ZM108.5 10L107.086 11.4142L114.586 18.9142L116 17.5L117.414 16.0858L109.914 8.58579L108.5 10ZM10 49H12V10H10H8V49H10ZM10 91H12V75H10H8V91H10ZM13 49V47H10V49V51H13V49ZM10 75V77H13V75V73H10V75ZM13 75H15V49H13H11V75H13ZM98.5 10V12H108.5V10V8H98.5V10ZM794.5 91V89H25V91V93H794.5V91ZM25 91V89H10V91V93H25V91ZM10 10V12H25V10V8H10V10ZM25 10V12H98.5V10V8H25V10Z");
    path2.setAttribute("fill", "white");
    path2.setAttribute("mask", "url(#path-2-inside-1_322_9)");
    
    mask.appendChild(maskPath);
    g1.appendChild(mask);
    g1.appendChild(path2);
    
    svg.appendChild(path1);
    svg.appendChild(g1);
    
    svgWrapper.appendChild(svg);
    contentWrapper.appendChild(svgWrapper);

    const hideIcon = this.hasAttribute("hide-icon");
    const icon = this.getAttribute("icon");
    if (icon && !hideIcon) {
      const iconEl = document.createElement("span");
      iconEl.className = "collapsible-item__icon";
      iconEl.textContent = icon;
      iconEl.style.marginRight = "0.5rem";
      contentWrapper.appendChild(iconEl);
    }
    const label = this.getAttribute("label") || "";
    if (label) {
      const labelEl = document.createElement("span");
      labelEl.className = "collapsible-item__label";
      labelEl.textContent = label;
      contentWrapper.appendChild(labelEl);
    }
    header.appendChild(contentWrapper);
    return header;
  }
  _render() {
    if (!this._isRendering) {
      this._isRendering = true;
      const existingContent = [];
      Array.from(this.children).forEach((child) => {
        if (child !== this._header && child !== this._content) {
          existingContent.push(child);
        }
      });
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
      this._header = this._createHeader();
      this.appendChild(this._header);
      if (this._header) {
        this._header.setAttribute("role", "button");
        this._header.setAttribute("aria-expanded", this._isExpanded ? "true" : "false");
        this._header.setAttribute("tabindex", "0");
        this._header.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this._toggleExpanded();
          }
        });
      }
      this._content = this._createContent();
      if (this._content) {
        this.appendChild(this._content);
        existingContent.forEach((child) => {
          this._content.appendChild(child);
        });
      }
      this.setAttribute("role", "listitem");
      this._updateContentVisibility();
      this.rendered = true;
      this._isRendering = false;
    }
  }
  _createContent() {
    const content = document.createElement("div");
    content.className = "collapsible-item__content";
    const headerElements = this.querySelectorAll(".collapsible-item__header, .collapsible-item__label, .collapsible-item__icon");
    const headerElementSet = new Set(headerElements);
    const filteredChildren = Array.from(this.childNodes).filter((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        return !headerElementSet.has(node) && !node.closest(".collapsible-item__header");
      }
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent.trim() !== "" && !node.textContent.includes("▶") && !node.textContent.includes("▼");
      }
      return false;
    });
    filteredChildren.forEach((child) => {
      content.appendChild(child.cloneNode(true));
    });
    return content;
  }
  get expanded() {
    return this._isExpanded;
  }
  set expanded(value) {
    if (this._isExpanded === value) return;
    this._isExpanded = value;
    if (this._isExpanded) {
      this.setAttribute("expanded", "");
    } else {
      this.removeAttribute("expanded");
    }
    this._updateContentVisibility();
    this.dispatchEvent(new CustomEvent("toggle", {
      detail: { expanded: this._isExpanded },
      bubbles: true,
      composed: true
    }));
  }
  _toggleExpanded() {
    this._isExpanded = !this._isExpanded;
    if (this._isExpanded) {
      this.setAttribute("expanded", "");
    } else {
      this.removeAttribute("expanded");
    }
    this._updateContentVisibility();
    this.dispatchEvent(new CustomEvent("toggle", {
      detail: { expanded: this._isExpanded },
      bubbles: true,
      composed: true
    }));
  }
  _updateContentVisibility() {
    if (!this._content || !this._header) return;
    const hideIcon = this.hasAttribute("hide-icon");
    if (this._isExpanded) {
      this._content.classList.add("collapsible-item__content--expanded");
      this._content.style.display = "block";
      this._header.setAttribute("aria-expanded", "true");
      this.classList.add("collapsible-item--expanded");
      if (!hideIcon) {
        this.setAttribute("icon", "▼");
      }
    } else {
      this._content.classList.remove("collapsible-item__content--expanded");
      this._content.style.display = "none";
      this._header.setAttribute("aria-expanded", "false");
      this.classList.remove("collapsible-item--expanded");
      if (!hideIcon) {
        this.setAttribute("icon", "▶");
      }
    }
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "removeshift") {
      this._removeShift = newValue !== null;
      if (this._removeShift) {
        this.classList.add("collapsible-item--no-padding");
      } else {
        this.classList.remove("collapsible-item--no-padding");
      }
    } else if (name === "hide-icon" && this._header) {
      const iconEl = this._header.querySelector(".collapsible-item__icon");
      if (newValue !== null) {
        if (iconEl) {
          iconEl.remove();
        }
      } else if (this.hasAttribute("icon")) {
        if (!iconEl) {
          const icon = this.getAttribute("icon");
          const newIconEl = document.createElement("span");
          newIconEl.className = "collapsible-item__icon";
          newIconEl.textContent = icon;
          newIconEl.style.marginRight = "0.5rem";
          const contentWrapper = this._header.firstElementChild;
          if (contentWrapper) {
            contentWrapper.insertBefore(newIconEl, contentWrapper.firstChild);
          }
        }
      }
    } else if (name === "expanded") {
      const wasExpanded = this._isExpanded;
      this._isExpanded = newValue !== null;
      if (this._isExpanded !== wasExpanded) {
        this._updateContentVisibility();
      }
    } else if (name === "icon" && this._header) {
      let iconEl = this._header.querySelector(".collapsible-item__icon");
      if (newValue) {
        if (!iconEl) {
          iconEl = document.createElement("span");
          iconEl.className = "collapsible-item__icon";
          this._header.insertBefore(iconEl, this._header.firstChild);
        }
        iconEl.textContent = newValue;
      } else if (iconEl) {
        this._header.removeChild(iconEl);
      }
    } else if (name === "label" && this._header) {
      let labelEl = this._header.querySelector(".collapsible-item__label");
      if (labelEl) {
        labelEl.textContent = newValue || "";
      } else if (newValue) {
        labelEl = document.createElement("span");
        labelEl.className = "collapsible-item__label";
        labelEl.textContent = newValue;
        this._header.appendChild(labelEl);
      }
    }
  }
}
const elementName = "collapsible-item";
if (typeof window !== "undefined" && window.customElements) {
  if (window.customElements.get(elementName)) {
    window.customElements.get(elementName);
    delete window.customElements._elements[elementName];
  }
  window.customElements.define(elementName, CollapsibleItem, { extends: "li" });
}
export {
  CollapsibleItem
};
//# sourceMappingURL=CollapsibleItem.js.map
