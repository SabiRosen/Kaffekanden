
//      Mobil navigation     

const burger = document.getElementById('burger');
const mobilMenu = document.getElementById('mobil-menu');

burger.addEventListener("click", function () {
    if (mobilMenu.style.display === "block") {
        mobilMenu.style.display = "none"; // skjul menuen
    } else {
        mobilMenu.style.display = "block"; // vis menuen
    }
});


//      Tilbage-til-top knap     


const tilToppen = document.querySelector(".til-toppen");
const footer = document.querySelector("#footer-stop"); 

window.addEventListener('scroll', checkHeight); 

function checkHeight() {
   
   if(window.scrollY > 1600) {
      tilToppen.style.display = "flex"; 

   } else { 
      tilToppen.style.display = "none";

   }



const normalBottom = 20;
const luft = 16; //lidt luft over footern//

const footerTop = footer.getBoundingClientRect().top; 
const knapHojde = tilToppen.offsetHeight;
   


if (footerTop < window.innerHeight - (knapHojde + normalBottom + luft)) {
//footeren er tæt på, den skubber knappen op//

   tilToppen.classList.add("footer-stop");
   tilToppen.style.bottom = (window.innerHeight - footerTop + luft) + "px"; 

} else {

   //footeren er længere væk, knappen er normal//

   tilToppen.classList.remove("footer-stop");
   tilToppen.style.bottom = normalBottom + "px";      
}


}


