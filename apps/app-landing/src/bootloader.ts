import App from "./App.svelte";

import "./index.scss";


export default (el) => {
  const app = new App({
    target: el,
  });

  (window as any).app = app;
};
