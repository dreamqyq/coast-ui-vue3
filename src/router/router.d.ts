export {};

declare module 'vue-router' {
  interface RouteMeta {
    prev: string | symbol;
    next: string | symbol;
  }
}
