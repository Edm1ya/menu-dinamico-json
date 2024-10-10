import { renderButtons } from "./usecases/render-buttons";
import { renderForm } from "./usecases/render-form";
import { renderNav } from "./usecases/render-nav";

let form;

export const App = (elementId) => {
  renderNav(elementId);
  let buttons = renderButtons(elementId);

  if (buttons) {
    buttons.addEventListener("click", (event) => {
      console.log(event.target.textContent);
      if (event.target.textContent !== "Borrar") {
        if (!form) {
          form = renderForm(elementId);
        }
      }
    });
  }
};
