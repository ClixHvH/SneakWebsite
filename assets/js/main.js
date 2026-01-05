(function() {
    function fade_out() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            window.setTimeout(() => {
                if (preloader) preloader.style.display = "none";
            }, 800);
        }
    }

    window.onload = function() {
        window.setTimeout(fade_out, 100);
    };

    // Fallback: if window.onload doesn't fire within 2 seconds, force fade out anyway
    window.setTimeout(fade_out, 2000);
    window.onscroll = function() {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };
    window.document.addEventListener('scroll', onScroll);
    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60
            });
        });
    });
    // Keep snow running even when tab is unfocused and slow it down for gentle floating
    if (window.snowStorm) {
        try {
            window.snowStorm.freezeOnBlur = false;
            window.snowStorm.snowStick = false;
            window.snowStorm.vMaxX = 2;
            window.snowStorm.vMaxY = 1;
            window.snowStorm.flakesMax = 64;
        } catch (e) {}
    }

    new WOW().init();
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    });

    // Hide scroll indicator after user starts scrolling or clicking it
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const toggleScrollIndicator = () => {
            if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > 10) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        };
        window.addEventListener('scroll', toggleScrollIndicator, {
            passive: true
        });
        toggleScrollIndicator();
        scrollIndicator.addEventListener('click', () => scrollIndicator.classList.add('hidden'));
    }
})();