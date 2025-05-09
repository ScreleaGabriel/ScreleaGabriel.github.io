let lastScroll = 0;
const header = document.querySelector('header');
const scrollThreshold = 60; // Quanto scroll prima che inizi l'animazione

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('header--hidden', 'header--scrolled');
        return;
    }
    
    if (currentScroll > scrollThreshold) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
    
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        header.classList.add('header--hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header--hidden')) {
        header.classList.remove('header--hidden');
    }
    
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    
    // Apri lightbox al click su qualsiasi immagine
    document.querySelectorAll('.box-immagine img').forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden'; // Blocca lo scroll
      });
    });
  
    // Chiudi lightbox
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    // Chiudi cliccando sullo sfondo
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  
    // Chiudi con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    // Elementi lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    
    // Attiva solo sulle immagini satellitari
    document.querySelectorAll('.immagine-con-didascalia img').forEach(img => {
      img.addEventListener('click', () => {
        // Usa data-hd se esiste, altrimenti src normale
        const hdSrc = img.dataset.hd || img.src;
        lightboxImg.src = hdSrc;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });
  
    // Chiudi lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => e.target === lightbox && closeLightbox());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && closeLightbox());
  
    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  document.querySelectorAll('nav a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});
