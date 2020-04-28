const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav_link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    });
});

























//https://www.youtube.com/watch?v=_xkSvufmjEs


/* When I start a new project, I should use these 

First: define my fonts
Second: define my colors
Third: define my font sizes
Fourth: redefine my font sizes for bigger screens

*,
*::before,
*::after {
    box-sizing: border-box;
} 

:root{
    --ff-primary: 'Source Code Pro', monospace;
    --ff-secundary: 'Roboto Mono', monospace;

    --fw-reg: 400;
    --fw-bold: 600;

    --clr-light: #fff;
    --clr-dark: #303030;
    --clr--accent: #16e0bd;

    --fs-h1: 3rem;
    --fs-h2: 2.25rem;
    --fs-h3: 1.25rem;
    --fs-body: 1rem;
}

@media (min-width: 800px){
    :root{
        --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-body: 1.125rem;
    }
}

*/