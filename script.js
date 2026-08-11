document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // PAGE CONFIG
    // ==========================

    document.title = VIP_CONFIG.pageTitle;

    document.getElementById("profile-img").src =
        VIP_CONFIG.profileImage;

    document.getElementById("bonus-text").textContent =
        VIP_CONFIG.bonusText;

    document.getElementById("button-text").textContent =
        VIP_CONFIG.buttonText;


    // ==========================
    // WHATSAPP BUTTON
    // ==========================

    const whatsappBtn =
        document.getElementById("whatsapp-btn");

    whatsappBtn.href =
        VIP_CONFIG.whatsappLink;


    // ==========================
    // LOADER
    // ==========================

    const loaderText =
        document.getElementById("loader-text");

    loaderText.textContent =
        VIP_CONFIG.loaderText;

    const loader =
        document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, VIP_CONFIG.loaderTime);


    // ==========================
    // GOOGLE ADS CONVERSION
    // WHATSAPP BUTTON CLICK
    // ==========================

    whatsappBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const whatsappURL =
            VIP_CONFIG.whatsappLink;

        document.getElementById("button-text").textContent =
            "OPENING WHATSAPP...";


        // Send Google Ads conversion
        gtag('event', 'conversion', {

            'send_to':
                'AW-18186576318/MRYkCNyc-98cEL7DhOBD',

            'value': 1.0,

            'currency': 'INR',

            'event_callback': function () {

                window.location.href =
                    whatsappURL;

            }

        });


        // Safety fallback:
        // WhatsApp opens even if callback doesn't return
        setTimeout(() => {

            window.location.href =
                whatsappURL;

        }, 1500);

    });

});
