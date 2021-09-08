  $(document).ready(function() {
      $('.ir-arriba').click(function() {
          $('body,html').animate({
              scrollTop: '0px'
          }, 300);
      });
      $(window).scroll(function() {
          if ($(this).scrollTop() > 0) {
              $('.ir-arriba').slideDown(300);
          } else {
              $('.ir-arriba').slideUp(300);
          }
      });
  });

  const grid = new Muuri('.grid', {
      layout: {
          rounding: false
      }
  });

  window.addEventListener('load', () => {
      grid.refreshItems().layout();
      document.getElementById('grid').classList.add('imagenes-cargadas');

      // Agregamos los listener de los enlaces para filtrar por categoria.
      const enlaces = document.querySelectorAll('#categorias a');
      enlaces.forEach((elemento) => {
          elemento.addEventListener('click', (evento) => {
              evento.preventDefault();
              enlaces.forEach((enlace) => enlace.classList.remove('activo'));
              evento.target.classList.add('activo');

              const categoria = evento.target.innerHTML.toLowerCase();
              categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
          });
      });

      // Agregamos el listener para la barra de busqueda
      document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
          const busqueda = evento.target.value;
          grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
      });



 
      // Eventlistener del overlay
      overlay.addEventListener('click', (evento) => {
          evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
      });
  });
