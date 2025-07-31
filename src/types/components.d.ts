import { ReactNode } from 'react';

declare module '*.jsx' {
  const content: React.ComponentType<any>;
  export default content;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'icon-label': {
        icon: string;
        label: string;
        className?: string;
        children?: ReactNode;
      };
    }
  }
}
