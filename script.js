const cards = document.querySelectorAll(".card-feature");

const modalVideo = document.getElementById("videoModal");
const modalVideoPlayer = document.getElementById("videoModalPlayer");
const closeVideoModal = document.querySelector(".close-video-modal");

const miniVideos = document.querySelectorAll(".mini-video");

const videoPrincipal = document.getElementById("videoPrincipal");
const modalVideoPrev = document.querySelector(".modal-video-prev");
const modalVideoNext = document.querySelector(".modal-video-next");

let currentVideoIndex = 0;




// =============================
// CARDS
// =============================

cards.forEach(card => {

    // CLICK
    card.addEventListener("click", () => {

        const yaActiva = card.classList.contains("active");

        cards.forEach(c => {
            c.classList.remove("active");
        });

        if (!yaActiva) {
            card.classList.add("active");
        }

    });



    // HOVER
    card.addEventListener("mouseenter", () => {

        cards.forEach(c => {

            if (c !== card) {

                c.classList.remove("active");

            }

        });

    });

});



// =============================
// FUNCION CAMBIAR VIDEO
// =============================
function cambiarVideo(index) {

    currentVideoIndex = index;

    const video = miniVideos[currentVideoIndex];

    miniVideos.forEach(v => {
        v.classList.remove("active");
    });

    video.classList.add("active");

    videoPrincipal.src = video.src;

    videoPrincipal.load();

    videoPrincipal.play();
}



miniVideos.forEach((video, index) => {

    video.addEventListener("mouseenter", () => {

        cambiarVideo(index);

    });

    video.addEventListener("click", () => {

        cambiarVideo(index);

    });

});




// =============================
// SIGUIENTE
// =============================




// =============================
// ANTERIOR
// =============================



// =============================
// ABRIR MODAL
// =============================

videoPrincipal.addEventListener("click", () => {

    modalVideo.classList.add("active");

    modalVideoPlayer.src = miniVideos[currentVideoIndex].src;

    modalVideoPlayer.load();

    modalVideoPlayer.play();

});

modalVideoNext.addEventListener("click", (e) => {

    e.stopPropagation();

    currentVideoIndex++;

    if (currentVideoIndex >= miniVideos.length) {
        currentVideoIndex = 0;
    }

    actualizarModalVideo();

});


modalVideoPrev.addEventListener("click", (e) => {

    e.stopPropagation();

    currentVideoIndex--;

    if (currentVideoIndex < 0) {
        currentVideoIndex = miniVideos.length - 1;
    }

    actualizarModalVideo();

});



function actualizarModalVideo() {

    const videoActual = miniVideos[currentVideoIndex];

    modalVideoPlayer.src = videoActual.src;

    modalVideoPlayer.load();

    modalVideoPlayer.play();

}



// =============================
// CERRAR MODAL
// =============================

closeVideoModal.addEventListener("click", cerrarModal);

modalVideo.addEventListener("click", (e) => {

    if (e.target === modalVideo) {
        cerrarModal();
    }

});

function cerrarModal() {

    modalVideo.classList.remove("active");

    modalVideoPlayer.pause();

}

// =============================
// MODAL IMÁGENES
// =============================

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

const prevBtn = document.querySelector(".modal-prev");

const nextBtn = document.querySelector(".modal-next");

const previewImages = document.querySelectorAll(".preview-images img");

let currentImages = [];

let currentImageIndex = 0;



// ABRIR IMAGEN
previewImages.forEach(img => {

    img.addEventListener("click", (e) => {

        e.stopPropagation();

        // obtener imágenes de la card actual
        const card = img.closest(".card-feature");

        currentImages = Array.from(
            card.querySelectorAll(".preview-images img")
        );

        // índice actual
        currentImageIndex = currentImages.indexOf(img);

        actualizarModalImagen();

        imageModal.classList.add("active");

    });

});



// ACTUALIZAR IMAGEN
function actualizarModalImagen() {

    modalImage.src = currentImages[currentImageIndex].src;

}



// SIGUIENTE
nextBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentImageIndex++;

    if (currentImageIndex >= currentImages.length) {

        currentImageIndex = 0;

    }

    actualizarModalImagen();

});



// ANTERIOR
prevBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex = currentImages.length - 1;

    }

    actualizarModalImagen();

});



// CERRAR
closeModal.addEventListener("click", cerrarModalImagen);

imageModal.addEventListener("click", (e) => {

    if (e.target === imageModal) {

        cerrarModalImagen();

    }

});



function cerrarModalImagen() {

    imageModal.classList.remove("active");

}

// =============================
// FLOATING VIDEOS
// =============================

const floatingVideos = document.getElementById("floatingVideos");

const floatingVideoItems = document.querySelectorAll(".floating-video");



// MOSTRAR AL HACER SCROLL
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        floatingVideos.classList.add("show");

    } else {

        floatingVideos.classList.remove("show");

    }

});



// CLICK EN FLOATING VIDEO
floatingVideoItems.forEach((video, index) => {

    video.addEventListener("click", () => {

        currentVideoIndex = index;

        modalVideo.classList.add("active");

        modalVideoPlayer.src = video.src;

        modalVideoPlayer.load();

        modalVideoPlayer.play();

    });

});

// =============================
// COPIAR EMAIL
// =============================

const copyEmailBtn = document.getElementById("copyEmailBtn");

const emailInput = document.getElementById("emailInput");



copyEmailBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(emailInput.value);

        copyEmailBtn.textContent = "¡Copiado!";

        setTimeout(() => {

            copyEmailBtn.textContent = "Copiar";

        }, 2000);

    } catch (error) {

        console.error("Error copiando email");

    }

});

/* ================= AUTO DEMO CARDS ================= */


function activarDemoCard(card) {

    if (window.innerWidth <= 700) return;

    card.classList.add("active");

    setTimeout(() => {

        card.classList.remove("active");

    }, 2200);
}


/* ================= CICLO AUTOMÁTICO ================= */

let indexCard = 0;

let intervaloCards;


/* FUNCIÓN PARA INICIAR */

function iniciarDemoCards() {

    intervaloCards = setInterval(() => {

        activarDemoCard(cards[indexCard]);

        indexCard++;

        if (indexCard >= cards.length) {

            indexCard = 0;
        }

    }, 3000);
}


/* INICIAR AL CARGAR */

iniciarDemoCards();


/* ================= PAUSAR EN HOVER ================= */

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        clearInterval(intervaloCards);

    });

    card.addEventListener("mouseleave", () => {

        iniciarDemoCards();

    });

});

const toggleIdioma = document.getElementById("toggleIdioma");

let idiomaActual = "es";

toggleIdioma.addEventListener("click", () => {

    const elementos = document.querySelectorAll("[data-es]");

    if (idiomaActual === "es") {

        elementos.forEach(el => {

            el.textContent = el.dataset.en;

        });

        idiomaActual = "English";

        toggleIdioma.textContent = "Español";

    } else {

        elementos.forEach(el => {

            el.textContent = el.dataset.es;

        });

        idiomaActual = "es";

        toggleIdioma.textContent = "English";
    }
});