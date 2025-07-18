declare global {
  // Declare the custom element interface
  interface HTMLElementTagNameMap {
    'icon-label': IconLabelElement;
  }
}

// Define the custom element interface
export interface IconLabelElement extends HTMLElement {
  // Properties
  icon: string;
  label: string;
  reverse: boolean;
}

// Declare the custom element constructor
declare global {
  var IconLabel: {
    prototype: IconLabelElement;
    new (): IconLabelElement;
  };
}

// JSX type definitions
declare namespace JSX {
  interface IntrinsicElements {
    'icon-label': Partial<IconLabelElement> & {
      class?: string;
      style?: React.CSSProperties;
    };
  }
}
