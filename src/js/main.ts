import "../css/main.scss";
import Rellax from "rellax";
import Swiper from "swiper";

const rellax = new Rellax(".js-hero", {
  speed: -6,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

const mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay: {
    delay:2500
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});

// export default () => {
//   console.log("test");
// };
