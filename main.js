const imagenes = [

    { id: 1, titulo: 'capibara', categoria: 'animales', url: 'imagenes%20seminario/Animales/capibara.jpeg' },
    { id: 2, titulo: 'gato guitarra', categoria: 'animales', url: 'imagenes%20seminario/Animales/gato%20guitarra.jpg' },
    { id: 3, titulo: 'guacamaya', categoria: 'animales', url: 'imagenes%20seminario/Animales/guacamaya.jpg' },
    { id: 4, titulo: 'jaguar black', categoria: 'animales', url: 'imagenes%20seminario/Animales/jaguar%20black.jpg' },
    { id: 5, titulo: 'tiburón blanco', categoria: 'animales', url: 'imagenes%20seminario/Animales/tiburon%20blanco.jpg' },
    { id: 6, titulo: 'Tierra de Osos', categoria: 'animales', url: 'imagenes%20seminario/Animales/tierra%20de%20osos.jpeg' },

    { id: 7, titulo: 'Anime Girl', categoria: 'anime', url: 'imagenes%20seminario/Anime/anime%20girl.jpg' },
    { id: 8, titulo: 'Anime Wp', categoria: 'anime', url: 'imagenes%20seminario/Anime/animewp.webp' },
    { id: 9, titulo: 'Berserk', categoria: 'anime', url: 'imagenes%20seminario/Anime/berserk.webp' },
    { id: 10, titulo: 'Kakegurui', categoria: 'anime', url: 'imagenes%20seminario/Anime/kakegurui.webp' },
    { id: 11, titulo: 'Miku', categoria: 'anime', url: 'imagenes%20seminario/Anime/miku.jpeg' },
    { id: 12, titulo: 'Saitama', categoria: 'anime', url: 'imagenes%20seminario/Anime/saitama.jpeg' },


    { id: 14, titulo: 'F1 2026', categoria: 'coches', url: 'imagenes%20seminario/Coches/f12026.jpeg' },
    { id: 15, titulo: 'Huracan', categoria: 'coches', url: 'imagenes%20seminario/Coches/huracan.jpeg' },
    { id: 16, titulo: 'Porsche GTR 911', categoria: 'coches', url: 'imagenes%20seminario/Coches/porshegtr911.jpeg' },
    { id: 17, titulo: 'Skyliner 34', categoria: 'coches', url: 'imagenes%20seminario/Coches/skyliner34.jpeg' },
    { id: 18, titulo: 'Vochido', categoria: 'coches', url: 'imagenes%20seminario/Coches/vochido.jpg' },

    { id: 19, titulo: 'Beisbol Ohtani', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/beisbol%20othani.jpeg' },
    { id: 20, titulo: 'Checo Pérez', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/checo-perez.jpeg' },
    { id: 21, titulo: 'CR7', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/cr7%20wp.jpg' },
    { id: 22, titulo: 'Lebron', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/lebron.jpeg' },
    { id: 23, titulo: 'Michael Phelps', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/michael%20phelps.jpeg' },
    { id: 24, titulo: 'Mike Tyson', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/mike%20tyson.jpeg' },
    { id: 25, titulo: 'Serena', categoria: 'deportes', url: 'imagenes%20seminario/Deportes/serenaa.jpeg' },

    { id: 26, titulo: 'Blue Galaxy', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/blue%20galaxy.jpg' },
    { id: 27, titulo: 'Chill Space', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/chill%20space.jpeg' },
    { id: 28, titulo: 'Espacio Chido', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/espacio%20chido.jpg' },
    { id: 29, titulo: 'Galaxy', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/galaxy.jpeg' },
    { id: 30, titulo: 'Planet', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/Planet.jpeg' },
    { id: 31, titulo: 'Tierra', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/tierra.jpeg' },
    { id: 32, titulo: 'Ton 618', categoria: 'espacio', url: 'imagenes%20seminario/Espacio/ton%20618.jpeg' },

    { id: 33, titulo: 'Atardecer', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/atardecer.avif' },
    { id: 34, titulo: 'Bosque Árboles', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/Bosque%20Arboles.avif' },
    { id: 35, titulo: 'Fuji', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/fuji.jpeg' },
    { id: 36, titulo: 'Montaña', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/montana.jpeg' },
    { id: 37, titulo: 'Nature Green', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/Nature%20green.avif' },
    { id: 38, titulo: 'Popocatépetl', categoria: 'paisajes', url: 'imagenes%20seminario/Paisajes/popocatepetl.jpeg' },

    { id: 39, titulo: 'Darth Vader', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/dath%20vader.jpeg' },
    { id: 40, titulo: 'Minions', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/minions.jpeg' },
    { id: 41, titulo: 'Odisea', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/odisea.jpeg' },
    { id: 42, titulo: 'Spiderman', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/spiderman.jpeg' },
    { id: 43, titulo: 'Superman', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/superman.jpeg' },
    { id: 44, titulo: 'Wall-E', categoria: 'peliculas', url: 'imagenes%20seminario/Peliculas/walle.jpg' },
];

const galeriaGrid = document.getElementById('galeriaGrid');
const searchInput = document.getElementById('searchInput');
const categoriasBtn = document.getElementById('categoriasBtn');
const categoriasDropdown = document.getElementById('categoriasDropdown');
const galeriaTitulo = document.getElementById('galeriaTitulo');
const homeLogo = document.getElementById('homeLogo');
const verTodosBtn = document.getElementById('verTodosBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginBtn = document.getElementById('loginBtn');

let categoriaActual = 'todos';

// Cuantas imagenes se ven sin iniciar sesión 
const LIMITE_SIN_SESION = 6; // cambiar si quiero mas o menos

// Mostrar / Ocultar menu  de categorías
if (categoriasBtn) {
  categoriasBtn.addEventListener('click', () => {
    categoriasDropdown.classList.toggle('hidden');
  });
}

// Cerrar el menú si se hace clic fuera
window.addEventListener('click', (e) => {
  if (categoriasBtn && categoriasDropdown) {
    if (!categoriasBtn.contains(e.target) && !categoriasDropdown.contains(e.target)) {
      categoriasDropdown.classList.add('hidden');
    }
  }
});

// inicio de secion
const loginForm = document.getElementById('loginForm');
const modalTitulo = document.getElementById('modalTitulo');
const submitBtn = document.getElementById('submitBtn');
const cambioTexto = document.getElementById('cambioTexto');
const cambioModo = document.getElementById('cambioModo');
const loginTexto = document.getElementById('loginTexto');

let modoRegistro = false;

// Cambiar el texto del botóo según haya sesión o no, y actualizar las imagenes
function actualizarBoton() {
  loginTexto.textContent = localStorage.getItem('sesion') ? 'Cerrar sesión' : 'Iniciar Sesion';
  filtrar();
}

// Cambiar entre Iniciar sesion y registrarse
function cambiarModo(registro) {
  modoRegistro = registro;
  modalTitulo.textContent = registro ? 'Crear Cuenta' : 'Iniciar Sesión';
  submitBtn.textContent = registro ? 'Registrarme' : 'Entrar';
  cambioTexto.textContent = registro ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?';
  cambioModo.textContent = registro ? 'Inicia sesión' : 'Regístrate';
}

// Clic en el boton del header: abrir ventana o cerrar sesión
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (localStorage.getItem('sesion')) {
    localStorage.removeItem('sesion');   // cerrar sesión
    actualizarBoton();
  } else {
    loginForm.reset();
    cambiarModo(false);
    loginModal.classList.remove('hidden');
  }
});

closeModal.addEventListener('click', () => loginModal.classList.add('hidden'));
cambioModo.addEventListener('click', () => cambiarModo(!modoRegistro));


// Descarga la imagen directamente en vez de abrirla en la pestaña
async function descargarImagen(url, titulo) {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error('No se pudo obtener la imagen');
    const blob = await respuesta.blob();

    const extension = url.split('?')[0].split('.').pop();
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = `${titulo}.${extension}`;
    document.body.appendChild(enlace);
    enlace.click();
    enlace.remove();
    setTimeout(() => URL.revokeObjectURL(enlace.href), 1000);
  } catch (error) {
    // Si algo falla, al menos la abre en otra pestaña
    window.open(url, '_blank');
  }
}

// Funcion para renderizar las tarjetas con estilo Tailwind
function renderizarImagenes(lista) {
  if (!galeriaGrid) return;
  galeriaGrid.innerHTML = '';
  
  if (lista.length === 0) {
    galeriaGrid.innerHTML = '<p class="col-span-full text-center text-zinc-400 py-10">No se encontraron wallpapers.</p>';
    return;
  }

  lista.forEach(img => {
    const card = document.createElement('div');
    card.className = 'bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg group hover:border-red-500 transition duration-300 flex flex-col justify-between';
    
// funcion que descarga la imagen / recorta la imagen 
    card.innerHTML = `
      <div class="overflow-hidden aspect-video bg-zinc-950">
        <img src="${img.url}" alt="${img.titulo}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
      </div>
      <div class="p-4 flex items-center justify-between gap-2">
        <span class="text-white font-medium text-sm truncate">${img.titulo}</span>
        <a href="${img.url}" download="${img.titulo}" class="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap shadow">
          Descargar 
        </a>
      </div>
    `;
    card.querySelector('a[download]').addEventListener('click', (e) => {
      e.preventDefault();
      descargarImagen(img.url, img.titulo);
    });

    galeriaGrid.appendChild(card);
  });
}

// filtrado por busqueda y categoría
function filtrar() {
  if (!searchInput) return;
  const textoBusqueda = searchInput.value.toLowerCase();
  
  const filtradas = imagenes.filter(img => {
    const coincideCategoria = (categoriaActual === 'todos') || (img.categoria === categoriaActual);
    const coincideTexto = img.titulo.toLowerCase().includes(textoBusqueda);
    return coincideCategoria && coincideTexto;
  });

  const haySesion = localStorage.getItem('sesion');
  renderizarImagenes(haySesion ? filtradas : filtradas.slice(0, LIMITE_SIN_SESION));
  // Aviso para invitar a iniciar sesion cuando hay imágenes ocultas
  if (!haySesion && filtradas.length > LIMITE_SIN_SESION && galeriaGrid) {
    galeriaGrid.insertAdjacentHTML('beforeend',
      '<p class="col-span-full text-center text-red-400 py-6">Inicia sesión para ver todos los wallpapers 🔒</p>');
  }
}

// busqueda en tiempo real
if (searchInput) {
  searchInput.addEventListener('input', filtrar);
}

// Seleccion de categorías desde el menu desplegable
document.querySelectorAll('#categoriasDropdown a').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    categoriaActual = item.getAttribute('data-category');
    
    if (galeriaTitulo) {
      galeriaTitulo.textContent = categoriaActual === 'todos' ? 'Wallpapers Destacados' : `Categoría: ${item.textContent}`;
    }
    
    if (categoriasDropdown) {
      categoriasDropdown.classList.add('hidden');
    }
    filtrar();
  });
});

// boton Logo para reiniciar filtros
const reiniciarFiltros = (e) => {
  e.preventDefault();
  categoriaActual = 'todos';
  if (searchInput) searchInput.value = '';
  if (galeriaTitulo) galeriaTitulo.textContent = 'Wallpapers Destacados';
  filtrar();
};

if (homeLogo) homeLogo.addEventListener('click', reiniciarFiltros);
if (verTodosBtn) verTodosBtn.addEventListener('click', reiniciarFiltros);

// Si b.php regresa con éxito, activa la sesión en la pagina
const params = new URLSearchParams(window.location.search);
if (params.get('status') === 'success') {
  localStorage.setItem('sesion', 'activa');
  window.history.replaceState({}, '', 'index.html');
}


// Carga inicial al abrir la pagina (también revisa si ya había sesion)
actualizarBoton();