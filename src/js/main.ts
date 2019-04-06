import "../css/main.scss";
import Swiper from "swiper";

let mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination"
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
