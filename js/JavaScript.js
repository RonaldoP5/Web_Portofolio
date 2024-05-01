const navigasi = document.querySelector('.navigasi');
const navigasiBar = document.querySelector('.navigasi_bar');
const logo = document.querySelector('.logo');
const beranda = document.querySelector('#beranda');
const tentangSaya = document.querySelector('#tentang_saya');
const layanan = document.querySelector('#layanan');
const keterampilan = document.querySelector('#keterampilan');
const projek = document.querySelector('#projek');
const kontak = document.querySelector('#kontak');

// Animasi navigasi
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navigasi.classList.add('scroll');
        navigasiBar.classList.add('scroll');
        logo.style.opacity = '1';
    } else {
        navigasi.classList.remove('scroll');
        navigasiBar.classList.remove('scroll');
        logo.style.opacity = '0';
    }
});

// Smooth scrolling
navigasiBar.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const target = document.querySelector(e.target.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

// Animasi elemen saat masuk viewport
const elements = document.querySelectorAll('.animasi');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

elements.forEach(element => {
    appearOnScroll.observe(element);
});

// Animasi progress bar
const progressBars = document.querySelectorAll('.kemajuan');

progressBars.forEach(bar => {
    const progress = bar.querySelector('span');
    const progressValue = progress.getAttribute('data-value');
    progress.style.width = progressValue;
});

// Animasi layanan saat hover
const layananItems = document.querySelectorAll('.daftar_layanan div');

layananItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
    });
});

// Animasi proyek saat hover
const projekItems = document.querySelectorAll('.baris');

projekItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover');
    });
});
