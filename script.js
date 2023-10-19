document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-list a');
    const footerLinks = document.querySelectorAll('#redirecionamento a');

    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToElement(targetId);
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToElement(targetId);
        });
    });

    function scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('header').offsetHeight;
            let extraOffset = 0; 

            if (targetId === "container-inicio") {
                extraOffset = -900; 
            } else if (targetId === "container-elements-especial") {
                extraOffset = 100; 
            }

            window.scrollTo({
                top: targetElement.offsetTop - navHeight - extraOffset,
                behavior: 'smooth'
            });
        }
    }
});
