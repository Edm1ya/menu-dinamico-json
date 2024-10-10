import { menu } from "../data/data.json";

export const renderNav = (elementId) => {
    const app = document.querySelector(elementId);
    const nav = document.createElement("nav");

    menu.forEach(({ id, nombre, enlace }) => {
      const a = document.createElement("a");
      a.innerText = nombre;
      a.id = id;
      a.href = enlace;
      a.className = "item";
      nav.append(a);
    });

    app.append(nav);
  };