

//      Animationsbanner     //

    const rullebaand = document.querySelector('.rullebaand');
    const indhold = rullebaand.querySelectorAll('ul');
    const bredde = indhold[0].scrollWidth; // får bredden af det første ul-indhold //

    let x = 0; // startposition //
    let hastighed = 0.4; // pixels per frame
    let animation = true; 


    function flytRullebaand() {
        if (animation) {
            x -= hastighed; // opdater positionen //
        }
        
            indhold.forEach((ul) => {
            ul.style.transform = "translateX(" + x + "px)"; // flytter ul-elementerne //
        });

        if (Math.abs(x) >= bredde) {
            x = 0;
        }  

        requestAnimationFrame(flytRullebaand); // anmoder om næste frame //
    }

flytRullebaand();


// Pause ved hover (erstatter CSS hover animation) //
rullebaand.addEventListener('mouseenter', () => {
    animation = false;
});

rullebaand.addEventListener('mouseleave', () => {
    animation = true;
});
