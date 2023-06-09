const URLactual = window.location.pathname;
const newsletter = document.querySelector(".newsletter")
const video = document.querySelector(".contenedor-video")
const header = document.querySelector("#header")
//const contenido = document.querySelector(".ui-search-main")

// (function() {
//     let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//     link.type = 'image/x-icon';
//     link.rel = 'shortcut icon';
//     link.href = 'https://iili.io/HjRJe3u.png';
//     document.getElementsByTagName('head')[0].appendChild(link);
//   })();
//   function faviconIn(){
//     let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//     link.type = 'image/x-icon';link.rel = 'shortcut icon';
//     link.href = 'https://iili.io/HjRJe3u.png';
//     document.getElementsByTagName('head')[0].appendChild(link)
//   };
  
//   setTimeout(faviconIn,1000);

if (URLactual !== "/") {
    newsletter.classList.toggle("no-visible")
    video.classList.toggle("no-visible")

    //Menu Desktop
    const btnSubmenuSinteticos = document.querySelector(".sinteticos");
    const submenuSinteticos = document.querySelector(".submenuSinteticos");

    btnSubmenuSinteticos.addEventListener("click", function () {
        btnSubmenuSinteticos.classList.toggle("rotacion");
        submenuSinteticos.classList.toggle("visible");
    });

    const btnSubmenuTelas = document.querySelector(".telas");
    const submenuTelas = document.querySelector(".submenuTelas");

    btnSubmenuTelas.addEventListener("click", function () {
        btnSubmenuTelas.classList.toggle("rotacion");
        submenuTelas.classList.toggle("visible");
    });

    const btnSubmenuForrerias = document.querySelector(".forrerias");
    const submenuForrerias = document.querySelector(".submenuForrerias");

    btnSubmenuForrerias.addEventListener("click", function () {
        btnSubmenuForrerias.classList.toggle("rotacion");
        submenuForrerias.classList.toggle("visible");
    });

    const btnSubmenuRefuerzos = document.querySelector(".refuerzos");
    const submenuRefuerzos = document.querySelector(".submenuRefuerzos");

    btnSubmenuRefuerzos.addEventListener("click", function () {
        btnSubmenuRefuerzos.classList.toggle("rotacion");
        submenuRefuerzos.classList.toggle("visible");
    });

    const btnSubmenuAccesorios = document.querySelector(".accesorios");
    const submenuAccesorios = document.querySelector(".submenuAccesorios");

    btnSubmenuAccesorios.addEventListener("click", function () {
        btnSubmenuAccesorios.classList.toggle("rotacion");
        submenuAccesorios.classList.toggle("visible");
    });

    // const btnSubmenuMayor = document.querySelector(".mayor");
    // const submenuMayor = document.querySelector(".submenuMayor");

    // btnSubmenuMayor.addEventListener("click", function () {
    //     btnSubmenuMayor.classList.toggle("rotacion");
    //     submenuMayor.classList.toggle("visible");
    // });

    //Menu Mobile
    const btnSubmenuSinteticos_mobile = document.querySelector(".sinteticos_mobile");
    const submenuSinteticos_mobile = document.querySelector(".submenuSinteticos_mobile");

    btnSubmenuSinteticos_mobile.addEventListener("click", function () {
        btnSubmenuSinteticos_mobile.classList.toggle("rotacion");
        submenuSinteticos_mobile.classList.toggle("visible");
    });

    const btnSubmenuTelas_mobile = document.querySelector(".telas_mobile");
    const submenuTelas_mobile = document.querySelector(".submenuTelas_mobile");

    btnSubmenuTelas_mobile.addEventListener("click", function () {
        btnSubmenuTelas_mobile.classList.toggle("rotacion");
        submenuTelas_mobile.classList.toggle("visible");
    });

    const btnSubmenuForrerias_mobile = document.querySelector(".forrerias_mobile");
    const submenuForrerias_mobile = document.querySelector(".submenuForrerias_mobile");

    btnSubmenuForrerias_mobile.addEventListener("click", function () {
        btnSubmenuForrerias_mobile.classList.toggle("rotacion");
        submenuForrerias_mobile.classList.toggle("visible");
    });

    const btnSubmenuRefuerzos_mobile = document.querySelector(".refuerzos_mobile");
    const submenuRefuerzos_mobile = document.querySelector(".submenuRefuerzos_mobile");

    btnSubmenuRefuerzos_mobile.addEventListener("click", function () {
        btnSubmenuRefuerzos_mobile.classList.toggle("rotacion");
        submenuRefuerzos_mobile.classList.toggle("visible");
    });

    const btnSubmenuAccesorios_mobile = document.querySelector(".accesorios_mobile");
    const submenuAccesorios_mobile = document.querySelector(".submenuAccesorios_mobile");

    btnSubmenuAccesorios_mobile.addEventListener("click", function () {
        btnSubmenuAccesorios_mobile.classList.toggle("rotacion");
        submenuAccesorios_mobile.classList.toggle("visible");
    });

    // const btnSubmenuMayor_mobile = document.querySelector(".mayor_mobile");
    // const submenuMayor_mobile = document.querySelector(".submenuMayor_mobile");

    // btnSubmenuMayor_mobile.addEventListener("click", function () {
    //     btnSubmenuMayor_mobile.classList.toggle("rotacion");
    //     submenuMayor_mobile.classList.toggle("visible");
    // });

    //contenido.classList.toggle("padding-top")
} else {
    //Menu Desktop
    const btnSubmenuSinteticos = document.querySelector(".sinteticos");
    const submenuSinteticos = document.querySelector(".submenuSinteticos");

    btnSubmenuSinteticos.addEventListener("click", function () {
        btnSubmenuSinteticos.classList.toggle("rotacion");
        submenuSinteticos.classList.toggle("visible");
    });

    const btnSubmenuTelas = document.querySelector(".telas");
    const submenuTelas = document.querySelector(".submenuTelas");

    btnSubmenuTelas.addEventListener("click", function () {
        btnSubmenuTelas.classList.toggle("rotacion");
        submenuTelas.classList.toggle("visible");
    });

    const btnSubmenuForrerias = document.querySelector(".forrerias");
    const submenuForrerias = document.querySelector(".submenuForrerias");

    btnSubmenuForrerias.addEventListener("click", function () {
        btnSubmenuForrerias.classList.toggle("rotacion");
        submenuForrerias.classList.toggle("visible");
    });

    const btnSubmenuRefuerzos = document.querySelector(".refuerzos");
    const submenuRefuerzos = document.querySelector(".submenuRefuerzos");

    btnSubmenuRefuerzos.addEventListener("click", function () {
        btnSubmenuRefuerzos.classList.toggle("rotacion");
        submenuRefuerzos.classList.toggle("visible");
    });

    const btnSubmenuAccesorios = document.querySelector(".accesorios");
    const submenuAccesorios = document.querySelector(".submenuAccesorios");

    btnSubmenuAccesorios.addEventListener("click", function () {
        btnSubmenuAccesorios.classList.toggle("rotacion");
        submenuAccesorios.classList.toggle("visible");
    });
    
    // const btnSubmenuMayor = document.querySelector(".mayor");
    // const submenuMayor = document.querySelector(".submenuMayor");

    // btnSubmenuMayor.addEventListener("click", function () {
    //     btnSubmenuMayor.classList.toggle("rotacion");
    //     submenuMayor.classList.toggle("visible");
    // });

    //Menu Mobile
    const btnSubmenuSinteticos_mobile = document.querySelector(".sinteticos_mobile");
    const submenuSinteticos_mobile = document.querySelector(".submenuSinteticos_mobile");

    btnSubmenuSinteticos_mobile.addEventListener("click", function () {
        btnSubmenuSinteticos_mobile.classList.toggle("rotacion");
        submenuSinteticos_mobile.classList.toggle("visible");
    });

    const btnSubmenuTelas_mobile = document.querySelector(".telas_mobile");
    const submenuTelas_mobile = document.querySelector(".submenuTelas_mobile");

    btnSubmenuTelas_mobile.addEventListener("click", function () {
        btnSubmenuTelas_mobile.classList.toggle("rotacion");
        submenuTelas_mobile.classList.toggle("visible");
    });

    const btnSubmenuForrerias_mobile = document.querySelector(".forrerias_mobile");
    const submenuForrerias_mobile = document.querySelector(".submenuForrerias_mobile");

    btnSubmenuForrerias_mobile.addEventListener("click", function () {
        btnSubmenuForrerias_mobile.classList.toggle("rotacion");
        submenuForrerias_mobile.classList.toggle("visible");
    });

    const btnSubmenuRefuerzos_mobile = document.querySelector(".refuerzos_mobile");
    const submenuRefuerzos_mobile = document.querySelector(".submenuRefuerzos_mobile");

    btnSubmenuRefuerzos_mobile.addEventListener("click", function () {
        btnSubmenuRefuerzos_mobile.classList.toggle("rotacion");
        submenuRefuerzos_mobile.classList.toggle("visible");
    });

    const btnSubmenuAccesorios_mobile = document.querySelector(".accesorios_mobile");
    const submenuAccesorios_mobile = document.querySelector(".submenuAccesorios_mobile");

    btnSubmenuAccesorios_mobile.addEventListener("click", function () {
        btnSubmenuAccesorios_mobile.classList.toggle("rotacion");
        submenuAccesorios_mobile.classList.toggle("visible");
    });

    // const btnSubmenuMayor_mobile = document.querySelector(".mayor_mobile");
    // const submenuMayor_mobile = document.querySelector(".submenuMayor_mobile");

    // btnSubmenuMayor_mobile.addEventListener("click", function () {
    //     btnSubmenuMayor_mobile.classList.toggle("rotacion");
    //     submenuMayor_mobile.classList.toggle("visible");
    // });
}