
//Slide
var swiper = new Swiper('carousel-item', 
{
 loop: true,
 pagination: {
 el: 'carousel-item',
 },
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   

// Logo elementini seçme
const logo = document.getElementById('logo');

// Logo elementine tıklanınca sayfayı yenile
logo.addEventListener('click', function() {
    location.reload();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//resimlere soldan sağa kayan açıklama
function showOverlay(element) {
   var overlay = element.querySelector('.overlay');
   overlay.style.left = '0';
}

function hideOverlay(element) {
   var overlay = element.querySelector('.overlay');
   overlay.style.left = '-100%';
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Dijital saat
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
 
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ark plan değiştirme
function myFunction1() {
  document.getElementById("myDIV").style.backgroundImage = "url(img/a3.jpg)";
}

function myFunction2() {
  document.getElementById("myDIV").style.backgroundImage = "url(img/phantomliberty.jpg)";
}

function myFunction3() {
  document.getElementById("myDIV").style.backgroundImage = "url(img/bloodborn.jpg)";
}

function myFunction4() {
  document.getElementById("myDIV").style.backgroundImage = "url(img/cybercity.jpg)";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ilgili yere atma
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Uyarı ile isim alma ve yazdırma
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('animatedImage');

  // Resme fare ile gelindiğinde animasyon eklemek için
  image.addEventListener('mouseover', function() {
      // Resmi büyütme animasyonu
      image.style.transition = 'transform 0.3s ease';
      image.style.transform = 'scale(1.1)';
  });

  // Fare resmin üzerinden çekildiğinde animasyonu kaldırmak için
  image.addEventListener('mouseout', function() {
      // Resmi normal boyutuna döndürme animasyonu
      image.style.transition = 'transform 0.3s ease';
      image.style.transform = 'scale(1)';
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeBackgroundColor() {
  var button = document.getElementById('colorChangingButton');

  // Rastgele renk oluştur (RGB formatında)
  var randomRed = Math.floor(Math.random() * 256);
  var randomGreen = Math.floor(Math.random() * 256);
  var randomBlue = Math.floor(Math.random() * 256);
  var randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  // Butonun arka plan rengini değiştir
  button.style.backgroundColor = randomColor;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var isAnimating = true; // Başlangıçta animasyonun devam edip etmediğini kontrol etmek için bir değişken tanımla

    function toggleAnimation() {
        var square = document.getElementById('rotatingSquare');

        if (isAnimating) {
            // Animasyonu durdur
            square.style.animationPlayState = 'paused';
            isAnimating = false;
        } else {
            // Animasyonu başlat
            square.style.animationPlayState = 'running';
            isAnimating = true;
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var hiddenImage = document.getElementById('hiddenImage');

    // Mouse üzerine gelindiğinde
    document.getElementById('imageContainer').addEventListener('mouseover', function() {
        showImage(); // Resmi göster
    });

    // Mouse üzerinden çıkıldığında
    document.getElementById('imageContainer').addEventListener('mouseout', function() {
        hideImage(); // Resmi gizle
    });

    function showImage() {
        hiddenImage.style.opacity = '1'; // Resmi görünür yap
    }

    function hideImage() {
        hiddenImage.style.opacity = '0'; // Resmi görünmez yap
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Resmi yavaşça kaybolan efektle gizle
function fadeOutImage() {
  var fadeImage = document.getElementById("fadeImage");
  var opacity = 1;

  var fadeEffect = setInterval(function () {
      if (opacity > 0) {
          opacity -= 0.1; // Opacity değerini azaltarak resmi yavaşça gizle
          fadeImage.style.opacity = opacity;
      } else {
          clearInterval(fadeEffect); // Opacity 0 olduğunda interval'i temizle
          fadeImage.style.display = "none"; // Resmi tamamen gizle
      }
  }, 50); // 50ms interval ile yavaşça kaybol
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




