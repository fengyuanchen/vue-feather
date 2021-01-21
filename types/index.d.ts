declare module 'vue-feather' {
  import { FunctionalComponent } from 'vue';

  interface VueFeatherProps {
    animation?: string;
    animationSpeed?: string;
    fill?: string;
    size?: number | string;
    stroke?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeWidth?: number | string;
    tag?: string;
    type: string;
  }

  const VueFeather: FunctionalComponent<VueFeatherProps>;

  export default VueFeather;
}
