document.addEventListener("DOMContentLoaded", () => {
  document.title = VIP_CONFIG.pageTitle;

  document.getElementById("profile-img").src = VIP_CONFIG.profileImage;
  document.getElementById("bonus-text").textContent = VIP_CONFIG.bonusText;
  document.getElementById("button-text").textContent = VIP_CONFIG.buttonText;

  const whatsappBtn = document.getElementById("whatsapp-btn");
  whatsappBtn.href = VIP_CONFIG.whatsappLink;

  const loaderText = document.getElementById("loader-text");
  loaderText.textContent = VIP_CONFIG.loaderText;

  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), VIP_CONFIG.loaderTime);

  whatsappBtn.addEventListener("click", () => {
    document.getElementById("button-text").textContent = "OPENING WHATSAPP...";
  });
});