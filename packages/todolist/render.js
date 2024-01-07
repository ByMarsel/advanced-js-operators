import { App } from "./app";

export const render = () => {
  const app = document.querySelector("#app");

  if (app.firstChild) {
    app.removeChild(app.firstChild);
  }

  app.append(App());
};
