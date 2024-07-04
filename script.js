const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = document.getElementById("i");

menuBtn.addEventListener("click", (e) =>{
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

navlinks.addEventListener("click", (e) =>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class",  "ri-menu-line")
})


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_content h4, .header_content .section_header", 
    {
    ...scrollRevealOption,
    delay: 500,
    }
);
ScrollReveal().reveal(".header_content p", 
    {
    ...scrollRevealOption,
    delay: 1000,
    }
);
ScrollReveal().reveal(".header_btn", 
    {
    ...scrollRevealOption,
    delay: 1500,
    }
);

ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
    }
);

ScrollReveal().reveal(".about_content .section_header",  {
    ...scrollRevealOption,
    delay: 500,
    }
);

ScrollReveal().reveal(".about_content .secction_desccription", {
    ...scrollRevealOption,
    delay: 1000,
    }
);

ScrollReveal().reveal(".about_card",  {
    ...scrollRevealOption,
    delay: 1500,
    interval:500,
    }
);

ScrollReveal().reveal(".price_card",  {
    ...scrollRevealOption,
    interval:500,
    }
);

const swiper = new Swiper(".swiper", {
    loop:true,
    slidesPerView:"auto",
    spaceBetween:20,
})