/* ==========================================================
        KAN ZEN RYU KARATE-DO KYOKAI
              OFFICIAL WEBSITE
             Developed by Anish Kumar
========================================================== */

"use strict";

/* ==========================================================
                    WEBSITE INITIALIZATION
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Website Initialized");

    initializeWebsite();

});

/* ==========================================================
                  MAIN INITIALIZER
========================================================== */

function initializeWebsite(){

    initializeLoader();

    initializeNavbar();

    initializeMobileMenu();

    initializeHero();

    initializeCounters();

    initializeGallery();

    initializeBackToTop();

    initializeScrollAnimations();

    initializeParticles();

}

/* ==========================================================
                    SHORT SELECTORS
========================================================== */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/* ==========================================================
                    GLOBAL ELEMENTS
========================================================== */

const header = $("header");

const loader = $(".loader");

const backToTop = $("#backToTop");

const menuToggle = $(".menu-toggle");

const navLinks = $(".nav-links");

/* ==========================================================
                WEBSITE CONFIGURATION
========================================================== */

const WEBSITE = {

    animationDuration:800,

    counterSpeed:30,

    loaderDuration:3000,

    scrollOffset:100

};

/* ==========================================================
                    INITIAL EMPTY MODULES
========================================================== */

function initializeLoader(){

    // Part 3A.2

}

function initializeNavbar(){

    // Part 3A.3

}

function initializeMobileMenu(){

    // Part 3B.1

}

/* ==========================================================
                    PART 3B.2
             CINEMATIC HERO ANIMATIONS
========================================================== */

function initializeHero(){

    const hero = document.querySelector(".hero");

    const heroLogo = document.querySelector(".hero-logo");

    const heroTitle = document.querySelector(".hero-content h1");

    const heroSubtitle = document.querySelector(".hero-content span");

    const heroText = document.querySelector(".hero-content p");

    const heroButtons = document.querySelector(".hero-buttons");

    const heroStats = document.querySelectorAll(".hero-stat");

    if(!hero) return;

    /* ==========================================
            GSAP HERO ENTRANCE
    ========================================== */

    if(typeof gsap !== "undefined"){

        const tl = gsap.timeline();

        tl.from(heroLogo,{

            scale:0,

            rotation:360,

            opacity:0,

            duration:1.3,

            ease:"back.out(1.8)"

        })

        .from(heroSubtitle,{

            opacity:0,

            y:35,

            duration:.6

        })

        .from(heroTitle,{

            opacity:0,

            y:60,

            duration:.9

        })

        .from(heroText,{

            opacity:0,

            y:40,

            duration:.8

        })

        .from(heroButtons,{

            opacity:0,

            y:35,

            duration:.6

        })

        .from(heroStats,{

            opacity:0,

            y:40,

            stagger:.15,

            duration:.6

        });

    }

    /* ==========================================
            FLOATING LOGO
    ========================================== */

    if(heroLogo){

        gsap.to(heroLogo,{

            y:-15,

            duration:2.2,

            repeat:-1,

            yoyo:true,

            ease:"sine.inOut"

        });

    }

    /* ==========================================
            PARALLAX EFFECT
    ========================================== */

    hero.addEventListener("mousemove",(e)=>{

        const x=(window.innerWidth/2-e.pageX)/40;

        const y=(window.innerHeight/2-e.pageY)/40;

        gsap.to(heroLogo,{

            x:x,

            y:y,

            duration:.8

        });

    });

    /* ==========================================
            HERO BUTTON EFFECT
    ========================================== */

    document.querySelectorAll(".hero-buttons a").forEach(btn=>{

        btn.addEventListener("mouseenter",()=>{

            gsap.to(btn,{

                scale:1.08,

                duration:.25

            });

        });

        btn.addEventListener("mouseleave",()=>{

            gsap.to(btn,{

                scale:1,

                duration:.25

            });

        });

    });

    /* ==========================================
            SCROLL INDICATOR
    ========================================== */

    const indicator=document.querySelector(".scroll-indicator");

    if(indicator){

        gsap.to(indicator,{

            y:15,

            repeat:-1,

            yoyo:true,

            duration:1.2,

            ease:"power1.inOut"

        });

    }

    /* ==========================================
            HERO IMAGE ZOOM
    ========================================== */

    const heroVideo=document.querySelector(".hero video");

    if(heroVideo){

        gsap.to(heroVideo,{

            scale:1.08,

            duration:18,

            ease:"none"

        });

    }

}

    // Part 3B.2

}

/* ==========================================================
                    PART 3C.1
              PREMIUM COUNTER ANIMATION
========================================================== */

function initializeCounters(){

    const counters = document.querySelectorAll("[data-counter]");

    if(!counters.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.5

    });

    counters.forEach(counter=>{

        observer.observe(counter);

    });

}

/* ==========================================================
                COUNTER ANIMATION
========================================================== */

function animateCounter(counter){

    const target = Number(counter.dataset.counter);

    const suffix = counter.dataset.suffix || "";

    const duration = 2000;

    const startTime = performance.now();

    function update(currentTime){

        const progress = Math.min((currentTime-startTime)/duration,1);

        const eased = 1-Math.pow(1-progress,3);

        const value = Math.floor(eased*target);

        counter.textContent = value + suffix;

        if(progress<1){

            requestAnimationFrame(update);

        }else{

            counter.textContent = target + suffix;

        }

    }

    requestAnimationFrame(update);

}

/* ==========================================================
                END PART 3C.1
========================================================== */
}

function initializeGallery(){

    // Part 3C.2

}

function initializeBackToTop(){

    // Part 3D.1

}

function initializeScrollAnimations(){

    // Part 3D.2

}

function initializeParticles(){

    // Part 3E

}

/* ==========================================================
                    GLOBAL HELPERS
========================================================== */

function addClass(element,className){

    if(element){

        element.classList.add(className);

    }

}

function removeClass(element,className){

    if(element){

        element.classList.remove(className);

    }

}

function toggleClass(element,className){

    if(element){

        element.classList.toggle(className);

    }

}

/* ==========================================================
                    WINDOW EVENTS
========================================================== */

window.addEventListener("load",()=>{

    console.log("All Website Resources Loaded");

});

window.addEventListener("resize",()=>{

    // Future Responsive Code

});

/* ==========================================================
                    CONSOLE MESSAGE
========================================================== */

console.log(
"%cKAN ZEN RYU KARATE-DO KYOKAI",
"color:#D4AF37;font-size:18px;font-weight:bold;"
);

console.log(
"%cOfficial Website Developed by Anish Kumar",
"color:#B30000;font-size:14px;"
);

/* ==========================================================
                    END OF PART 3A.1
========================================================== */
/* ==========================================================
                    PART 3A.2
                PREMIUM LOADER SYSTEM
========================================================== */

function initializeLoader(){

    if(!loader) return;

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const progressBar = document.querySelector(".loader-progress span");
    const percentage = document.querySelector(".loader-percent");

    let progress = 0;

    const loadingInterval = setInterval(() => {

        progress++;

        if(percentage){

            percentage.textContent = progress + "%";

        }

        if(progressBar){

            progressBar.style.width = progress + "%";

        }

        if(progress >= 100){

            clearInterval(loadingInterval);

            finishLoader();

        }

    }, WEBSITE.loaderDuration / 100);

}

/* ==========================================================
                    FINISH LOADER
========================================================== */

function finishLoader(){

    document.body.style.overflow = "";

    if(loader){

        loader.classList.add("hide");

    }

    document.body.classList.add("loaded");

    startEntranceAnimation();

}

/* ==========================================================
                PAGE ENTRANCE ANIMATION
========================================================== */

function startEntranceAnimation(){

    if(typeof gsap === "undefined") return;

    gsap.from(".hero-content > *",{

        opacity:0,

        y:60,

        duration:1,

        stagger:0.18,

        ease:"power3.out"

    });

    gsap.from(".hero-logo",{

        scale:.5,

        opacity:0,

        duration:1.2,

        ease:"back.out(1.7)"

    });

    gsap.from(".hero-stat",{

        opacity:0,

        y:40,

        duration:.8,

        delay:.8,

        stagger:.15,

        ease:"power2.out"

    });

}

/* ==========================================================
                LOADER ESCAPE (Safety)
========================================================== */

setTimeout(()=>{

    if(loader && !loader.classList.contains("hide")){

        finishLoader();

    }

},6000);

/* ==========================================================
                END OF PART 3A.2
========================================================== */
/* ==========================================================
                    PART 3A.3
            PREMIUM STICKY NAVIGATION
========================================================== */

function initializeNavbar(){

    if(!header) return;

    /* =========================
          STICKY NAVBAR
    ========================= */

    function handleNavbar(){

        if(window.scrollY > WEBSITE.scrollOffset){

            addClass(header,"scrolled");

        }else{

            removeClass(header,"scrolled");

        }

        updateActiveNavigation();

    }

    handleNavbar();

    window.addEventListener("scroll",handleNavbar);

    /* =========================
         SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

            if(navLinks){

                navLinks.classList.remove("active");

            }

        });

    });

}

/* ==========================================================
            ACTIVE NAVIGATION HIGHLIGHT
========================================================== */

function updateActiveNavigation(){

    const sections = document.querySelectorAll("section[id]");

    const navItems = document.querySelectorAll(".nav-links a");

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY>=sectionTop &&
           window.scrollY<sectionTop+sectionHeight){

            currentSection=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        removeClass(link,"active");

        if(link.getAttribute("href")==="#" + currentSection){

            addClass(link,"active");

        }

    });

}

/* ==========================================================
                END OF PART 3A.3
========================================================== */
/* ==========================================================
                    PART 3B.1
                PREMIUM MOBILE MENU
========================================================== */

function initializeMobileMenu(){

    if(!menuToggle || !navLinks) return;

    /* =========================
            OPEN / CLOSE
    ========================= */

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");

        document.body.classList.toggle("menu-open");

        animateMenuItems();

    });

    /* =========================
        CLOSE AFTER CLICK
    ========================= */

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            closeMobileMenu();

        });

    });

    /* =========================
            ESC KEY
    ========================= */

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeMobileMenu();

        }

    });

    /* =========================
        CLICK OUTSIDE
    ========================= */

    document.addEventListener("click",(e)=>{

        if(
            navLinks.classList.contains("active") &&
            !navLinks.contains(e.target) &&
            !menuToggle.contains(e.target)
        ){

            closeMobileMenu();

        }

    });

}

/* ==========================================================
            CLOSE MOBILE MENU
========================================================== */

function closeMobileMenu(){

    if(navLinks){

        navLinks.classList.remove("active");

    }

    if(menuToggle){

        menuToggle.classList.remove("active");

    }

    document.body.classList.remove("menu-open");

}

/* ==========================================================
            MENU ITEM ANIMATION
========================================================== */

function animateMenuItems(){

    if(typeof gsap==="undefined") return;

    gsap.from(".nav-links li",{

        opacity:0,

        x:40,

        duration:.5,

        stagger:.08,

        ease:"power3.out"

    });

}

/* ==========================================================
                END OF PART 3B.1
========================================================== */

