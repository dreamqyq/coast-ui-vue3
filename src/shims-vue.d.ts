declare module '*.vue' {
  import { App, defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
declare module '*.md' {
  const str: string;
  export default str;
}
declare module '*.json' {
  const json: string;
  export default json;
}
