



document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.stopPropagation();

        const content = this.nextElementSibling;
        content.classList.toggle('show');
        this.classList.toggle('active') //Pilen rotere med .active
    });
});

// Luk DD igen
document.addEventListener('click', function () {
    document.querySelectorAll(
        '.drikindhold, .olindhold, .menuindhold, .julindhold'
    ).forEach(panel => panel.classList.remove('show'));
     document.querySelectorAll('.dropbtn')
        .forEach(btn => btn.classList.remove('active'));
});

