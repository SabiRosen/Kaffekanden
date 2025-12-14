
function myFunction() {
    const panels = document.querySelectorAll('.drikindhold');
    panels.forEach(panel => panel.classList.toggle('show'));
}

// Luk dropdown igen
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(e.target)) {
        document.querySelectorAll('.drikindhold')
            .forEach(panel => panel.classList.remove('show'));
    }
});



/*Ny dropdown med øl*/

function myFunction2() {
    const panels = document.querySelectorAll('.olindhold'); 
    panels.forEach(panel => panel.classList.toggle('show'));
}

// Luk dropdown, når der klikkes udenfor
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown'); 

    if (!dropdown.contains(e.target)) {
        document.querySelectorAll('.olindhold')
            .forEach(panel => panel.classList.remove('show'));
    }
});



/*Ny DD med menu*/

function myFunction3() {
    const panels = document.querySelectorAll('.menuindhold'); 
    panels.forEach(panel => panel.classList.toggle('show'));
}

// Luk dropdown, når der klikkes udenfor
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown'); 

    if (!dropdown.contains(e.target)) {
        document.querySelectorAll('.menuindhold')
            .forEach(panel => panel.classList.remove('show'));
    }
});


/*Ny DD med jul*/

function myFunction4() {
    const panels = document.querySelectorAll('.julindhold'); 
    panels.forEach(panel => panel.classList.toggle('show'));
}

// Luk dropdown, når der klikkes udenfor
document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown'); 

    if (!dropdown.contains(e.target)) {
        document.querySelectorAll('.julindhold')
            .forEach(panel => panel.classList.remove('show'));
    }
});
