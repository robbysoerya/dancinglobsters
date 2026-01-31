import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        scrollamount?: number | string;
        scrolldelay?: number | string;
        direction?: "left" | "right" | "up" | "down";
        behavior?: "scroll" | "slide" | "alternate";
        loop?: number | string;
        bgcolor?: string;
      };
    }
  }
}
