//      JASTIP MUTIARA KOMODO EXPRESS

// Nomor WhatsApp Admin (Format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6281234567890";

// Nomor yang ditampilkan di website
const WHATSAPP_DISPLAY = "+62 812-3456-7890";

//      MEMBUAT LINK WHATSAPP

function waLink(message = "") {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;

    if (!message) return base;

    return `${base}?text=${encodeURIComponent(message)}`;
}

//      MENAMPILKAN NOMOR WHATSAPP

const phoneDisplay = document.getElementById("phoneDisplay");

if (phoneDisplay) {
    phoneDisplay.href = waLink();
    phoneDisplay.target = "_blank";
    phoneDisplay.textContent = WHATSAPP_DISPLAY;
}

//          TOMBOL WHATSAPP

const defaultMessage =
"Halo Admin Jastip Mutiara Komodo Express, saya ingin konsultasi mengenai jastip/pengiriman barang.";

["waHero", "waCta", "waCalc"].forEach(id => {

    const btn = document.getElementById(id);

    if (btn) {
        btn.href = waLink(defaultMessage);
        btn.target = "_blank";
    }

});

//          KALKULATOR ONGKIR

const calculateBtn = document.getElementById("calculate");

if (calculateBtn) {

  calculateBtn.addEventListener("click", () => {

    const weight =
            
      Number(document.getElementById("weight").value);

    const destination =
            
      document.getElementById("destination");

    const rate =
            
      Number(destination.value);

    const destinationName =
            
      destination.options[destination.selectedIndex].text;

    const result =
      
      document.getElementById("result");

      if (!weight || weight <= 0) {

        result.hidden = false;

        result.innerHTML =
                
          "Silakan masukkan berat barang yang valid.";

        return;
      }

      const total = weight * rate;

        result.hidden = false;

        result.innerHTML = `
          
          <span>Estimasi ${destinationName}</span>
            
        <strong>Rp ${total.toLocaleString("id-ID")}</strong>
            
          <small>
                
            ${weight} kg × Rp ${rate.toLocaleString("id-ID")}/kg
            
          </small>
        `;

      const message =
        
        `Halo Admin Jastip Mutiara Komodo Express,
        Saya ingin konsultasi pengiriman.

        Tujuan : ${destinationName}
        Berat : ${weight} kg
        Estimasi Ongkir : Rp ${total.toLocaleString("id-ID")}
        `;

      const waCalc =
          
        document.getElementById("waCalc");

        if (waCalc) {

          waCalc.href = waLink(message);
          waCalc.target = "_blank";

        }

  });

}

// ======================================
//              MOBILE MENU
// ======================================

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });

}

// ======================================
//              COPYRIGHT
// ======================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}