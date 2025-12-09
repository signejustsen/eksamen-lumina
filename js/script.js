"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // DOM-elementer
  const menuIkon = document.querySelector(".menuikon");
  const kurvIkon = document.querySelector(".kurvikon");
  const heroBtn = document.querySelector(".hero-btn");
  const ctaButtons = document.querySelectorAll(".btn");
  const popupMenu = document.querySelector(".popup-menu");
  const popupKurv = document.querySelector(".kurv-popup");
  const overlay = document.getElementById("overlay");
  const lukMenuBtn = document.getElementById("lukmenu");
  const lukKurvBtn = document.getElementById("lukkurv");

  // Åbn menu
  menuIkon.onclick = () => {
    popupMenu.classList.add("open");
    overlay.classList.add("active");
  };

  //  Åbn kurv
  kurvIkon.onclick = () => {
    popupKurv.classList.add("open");
    overlay.classList.add("active");
  };

  // Luk når der trykkes på kryds
  lukMenuBtn.onclick =
    lukKurvBtn.onclick =
    overlay.onclick =
      () => {
        popupMenu.classList.remove("open");
        popupKurv.classList.remove("open");
        overlay.classList.remove("active");
      };

  if (heroBtn) {
    heroBtn.addEventListener("click", function () {
      popupKurv.classList.add("open");
      overlay.classList.add("active");
    });
  }

  // Åbn kurv via ALLE CTA-knapper
  ctaButtons.forEach(function (knap) {
    knap.addEventListener("click", function () {
      popupKurv.classList.add("open");
      overlay.classList.add("active");
    });
  });
});
