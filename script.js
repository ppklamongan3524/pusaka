//Untuk manempilkan gambar di beranda bergantian
let currentImageIndex = 0;
const images = ['pusaka1.png', 'pusaka2.png', 'pusaka3.png']; // Ganti dengan path gambar yang benar
const slideshowElement = document.getElementById('slideshow');

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowElement.src = images[currentImageIndex];
}

setInterval(changeImage, 3000); // Mengganti gambar setiap 3 detik

var coll = document.getElementsByClassName("collapsible");
var i;

// Menambahkan event listener untuk setiap tombol collapsible
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var arrow = this.querySelector(".arrow");

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.innerHTML = "&#9660;"; // Panah turun (tertutup)
        } else {
            content.style.display = "block";
            arrow.innerHTML = "&#9650;"; // Panah naik (terbuka)
        }
    });
}

var coll = document.getElementsByClassName("collapsible-2");
var i;

// Menambahkan event listener untuk setiap tombol collapsible
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        var arrow = this.querySelector(".arrow");

        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.innerHTML = "&#9660;"; // Panah turun (tertutup)
        } else {
            content.style.display = "block";
            arrow.innerHTML = "&#9650;"; // Panah naik (terbuka)
        }
    });
}

function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    nav.classList.toggle('active'); /* Toggle class untuk sliding */
}