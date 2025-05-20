  const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('navbar');

    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });