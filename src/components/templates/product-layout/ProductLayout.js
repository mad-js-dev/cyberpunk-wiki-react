import "../../organisms/image-collection/ImageCollection.js";
const defaultImages = [
  {
    title: "Nature",
    src: "images/samples/nature.jpg",
    alt: "Scenic nature landscape",
    description: "A beautiful landscape showcasing nature's beauty."
  },
  {
    title: "Architecture",
    src: "images/samples/architecture.jpg",
    alt: "Modern architecture building",
    description: "Stunning modern architecture design."
  },
  {
    title: "Technology",
    src: "images/samples/technology.jpg",
    alt: "Technology circuit board",
    description: "Close-up of an advanced circuit board."
  }
];
class ProductLayout extends HTMLElement {
  static get observedAttributes() {
    return ["title", "images"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._title = "Product Name";
    this._images = [];
    this._isConnected = false;
    this._hasRendered = false;
    this._isUpdating = false;
    this._elements = null;
    this._render = this._render.bind(this);
  }
  connectedCallback() {
    this._isConnected = true;
    this._render();
  }
  disconnectedCallback() {
    this._isConnected = false;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    
    if (name === "title") {
      this._title = newValue || "Product Name";
      this._updateTitle();
      return;
    }
    
    if (name === "images") {
      try {
        // If newValue is null, undefined, or empty string, set empty array
        if (newValue == null || newValue === '') {
          this.images = [];
          return;
        }
        
        // If it's a string that looks like JSON, parse it
        if (typeof newValue === 'string' && (newValue.startsWith('[') || newValue.startsWith('{'))) {
          try {
            const parsed = JSON.parse(newValue);
            this.images = parsed;
          } catch (e) {
            console.error('Failed to parse images JSON:', e);
            this.images = [];
          }
          return;
        }
        
        // For any other case, let the images setter handle it
        this.images = newValue;
      } catch (error) {
        console.error('Error in attributeChangedCallback for images:', error);
        this.images = [];
      }
    }
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (this._title === value) return;
    this._title = value || "";
    this._updateTitle();
  }
  get images() {
    return this._images;
  }
  set images(value) {
    try {
      // Handle undefined or null
      if (value == null) {
        this._images = [];
        this._updateImages();
        return;
      }
      
      // If it's a string, try to parse it as JSON
      if (typeof value === 'string') {
        try {
          value = JSON.parse(value);
        } catch (e) {
          console.error('Failed to parse images JSON:', e);
          this._images = [];
          this._updateImages();
          return;
        }
      }
      
      // Ensure it's an array
      if (!Array.isArray(value)) {
        console.warn('Expected images to be an array, got:', typeof value);
        this._images = [];
      } else {
        this._images = [...value];
      }
      
      this._updateImages();

      // Handle arrays directly
      if (Array.isArray(value)) {
        this._images = value.map(img => ({
          src: img?.src || '',
          title: img?.title || '',
          alt: img?.alt || '',
          description: img?.description || ''
        }));
        this._updateImages();
        return;
      }

      // Handle string input
      if (typeof value === 'string') {
        // Skip empty strings
        if (!value.trim()) {
          this._images = [];
          this._updateImages();
          return;
        }

        // Try to parse JSON string
        try {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) {
            this._images = parsed.map(img => ({
              src: img?.src || '',
              title: img?.title || '',
              alt: img?.alt || '',
              description: img?.description || ''
            }));
          } else {
            this._images = [];
          }
        } catch (e) {
          console.error("Invalid images JSON:", e);
          this._images = [];
        }
        this._updateImages();
        return;
      }

      // For any other type, use an empty array
      this._images = [];
      this._updateImages();
    } catch (error) {
      console.error('Error in images setter:', error);
      this._images = [];
      this._updateImages();
    }
  }
  _updateTitle() {
    var _a;
    if (!((_a = this._elements) == null ? void 0 : _a.title)) return;
    this._elements.title.textContent = this._title;
  }
  _updateImages() {
    if (!this._elements?.imageCollection) {
      console.log('Image collection element not ready');
      return;
    }
    
    try {
      console.log('Updating images:', this._images);
      this._elements.imageCollection.images = [...this._images];
      
      if (this._elements.imageCollectionContainer) {
        this._elements.imageCollectionContainer.style.display = 
          this._images.length > 0 ? "block" : "none";
      }
      
      // Force a re-render of the image collection
      if (this._elements.imageCollection._render) {
        this._elements.imageCollection._render();
      }
    } catch (error) {
      console.error('Error updating images:', error);
    }
  }
  _render() {
    if (this._isUpdating || !this.shadowRoot) return;
    this._isUpdating = true;
    try {
      // Always get the current slot content
      const slotContent = this.innerHTML.trim();
      
      // Only re-render if content has changed or it's the first render
      if (!this._hasRendered || this._lastSlotContent !== slotContent) {
        this._lastSlotContent = slotContent;
        
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              max-width: 1200px;
              margin: 0 auto;
              padding: 2rem;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            
            .product-layout {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .product-header {
              text-align: center;
              margin-bottom: 2rem;
            }
            
            .product-title {
              font-size: 2.5rem;
              color: #2d3748;
              margin: 0 0 1rem;
            }
            
            .content {
              line-height: 1.6;
              color: #4a5568;
            }
            
            .image-collection-container {
              margin: 2rem 0;
            }
            
            /* Remove padding from collapsible items */
            image-collection::part(content) {
              padding: 0;
            }
            
            @media (min-width: 1024px) {
              .product-layout {
                grid-template-columns: 1fr 1fr;
                align-items: start;
              }
            }
          </style>
          <div class="product-layout">
            <div class="product-content">
              <div class="product-header">
                <h1 class="product-title" id="title"></h1>
              </div>
              <div class="content" id="content">
                ${slotContent}
              </div>
            </div>
            <div class="image-collection-container" id="imageCollectionContainer" style="display: none;">
              <image-collection id="imageCollection"></image-collection>
            </div>
          </div>
        `;
        this._elements = {
          title: this.shadowRoot.getElementById("title"),
          content: this.shadowRoot.getElementById("content"),
          imageCollection: this.shadowRoot.getElementById("imageCollection"),
          imageCollectionContainer: this.shadowRoot.getElementById("imageCollectionContainer")
        };
        if (this._images.length === 0) {
          this._images = [...defaultImages];
        }
        this._hasRendered = true;
      }
      this._updateTitle();
      this._updateImages();
    } finally {
      this._isUpdating = false;
    }
  }
}
if (typeof window !== "undefined" && !customElements.get("product-layout")) {
  customElements.define("product-layout", ProductLayout);
}
export {
  ProductLayout
};
//# sourceMappingURL=ProductLayout.js.map
