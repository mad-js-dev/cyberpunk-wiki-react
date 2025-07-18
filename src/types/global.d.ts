import 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'icon-label': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon?: string;
          label?: string;
          reverse?: boolean | string;
          class?: string;
          className?: string;
          class?: string;
        },
        HTMLElement
      >;
    }
  }
}
