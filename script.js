// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏活跃状态
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 简单的加载动画
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    header.style.opacity = '0';
    main.style.opacity = '0';
    
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease';
        main.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';
        main.style.opacity = '1';
    }, 100);
});
