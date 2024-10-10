const btnAdd = document.createElement('button');
const btnEdit = document.createElement('button');
const btnDelete = document.createElement('button');
const divElement = document.createElement('div');
export const renderButtons = (elementId)=>{
    const app = document.querySelector(elementId);

    btnAdd.innerText = 'Agregar';
    btnEdit.innerText = 'Editar';
    btnDelete.innerText = 'Borrar';
    divElement.className = 'buttons';
    divElement.append(btnAdd, btnEdit, btnDelete);

    app.append(divElement);
    return divElement;
}