document.addEventListener('DOMContentLoaded', function () {
  // Cargar archivo JSON
  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      const menu = data.menu;
      const menuElement = document.getElementById('menu');

      // Renderizar las opciones del menú
      menu.forEach(option => {
        const menuItem = document.createElement('li');

        // Crear enlace para cada opción
        const link = document.createElement('a');
        link.textContent = option.nombre;
        link.href = option.enlace;

        menuItem.appendChild(link);

        // Si tiene submenús, renderizarlos
        if (option.subMenu) {
          const subMenu = document.createElement('ul');
          subMenu.classList.add('submenu');

          option.subMenu.forEach(subOption => {
            const subMenuItem = document.createElement('li');
            const subLink = document.createElement('a');
            subLink.textContent = subOption.nombre;
            subLink.href = subOption.enlace;

            subMenuItem.appendChild(subLink);
            subMenu.appendChild(subMenuItem);
          });

          menuItem.appendChild(subMenu);
        }

        menuElement.appendChild(menuItem);
      });
    })
    .catch(error => {
      console.error('Error al cargar el menú:', error);
    });

  document.getElementById('menuForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const enlace = document.getElementById('enlace').value;

    // Crear nueva opción del menú
    const newMenuItem = {
      nombre,
      enlace
    };

    // Agregar al menú dinámico
    const menuElement = document.getElementById('menu');
    const menuItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = nombre;
    link.href = enlace;
    menuItem.appendChild(link);
    menuElement.appendChild(menuItem);

    // Limpiar formulario
    document.getElementById('nombre').value = '';
    document.getElementById('enlace').value = '';
  });
});
