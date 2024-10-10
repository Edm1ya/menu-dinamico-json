import form from "./form.html?raw";
import { renderButtons } from "./render-buttons";
import { renderNav } from "./render-nav";

export const renderForm = (elementId) => {
  const app = document.querySelector(elementId);
  const div = document.createElement("div");

  div.innerHTML = form;

  app.append(div);

  const send = div.querySelector("#send");
  const cancel = div.querySelector("#cancel");

  send.addEventListener('click', ()=>{
    
    
  })

  cancel.addEventListener('click', ()=>{
    app.removeChild(div);
  })

  return div;
};
