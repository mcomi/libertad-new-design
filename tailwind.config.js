// prettier-ignore
module.exports = {
  purge: ["./**/*.html", "./assets/src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "reddish-orange": "#f26522",
        "light-navy-blue-two": "#305395",
        "macaroni-and-cheese": "#f1ca30",
        "yellow-hover": "#ffad00",
        "white-two": "#f0f0f0",
        "black-two": "#1e1e1e",
        "forms": "#333333",
        "green-form": "#009045",
        "dark-grey-blue": "#2c315f",
        "light-navy-blue": "#325699",
        "peacock-blue": "#005398",
        "macaroni-and-cheese-two": "#f2ca30",
        "marigold": "#fbb902",
        "dark-grey-blue-two": "#2b315f",
        "dark-slate-blue": "#223c6b",
        "pinkish-grey": "#d1d1d1",
        "light-navy-blue-three": "#2f5394",
        "pinkish-grey-two": "#c5c5c5",
        "white-three": "#ebe9e9",
        "twilight-blue": "#0d3750",
        "greyish-brown": "#545454",
        "greyish-brown-two": "#3f3f3f",
        "black-three": "#313131",
        "light-navy-blue-four": "#2f5495",
        "piss-yellow": "#d2b41a",
        "silver": "#dfe2e3",
        "grey-section": "#e9e9e9",
        "gray-light": "#f5f7f8",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
      height: {
        "bg-slide": "70vh",
        "md-slide": "26rem",
        "sm-slide": "40vh",
      },
      width: {
        "abs-card": "450px",
        "maximo": "888px",
      },
      minHeight: {
        "card-offer": "300px",
      },
      minWidth: {
        "table-cell": "150px",
      },
      inset: {
        50: "50%",
        10: "10%",
        1: "1rem",
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    transitionProperty: ["hover", "focus", "group-hover"],
    translate: ["active", "group-hover"],
    scale: ["active", "group-hover"],
  },
  plugins: [
    // Other plugins
    require("tailwindcss-animatecss")({
      classes: [
        "animate__animated",
        "animate__bounceInRight",
        "animate__fadeIn",
        "animate__shakeX",
        "animate__swing",
        "animate__slow",
      ],
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 1500,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive", "hover", "reduced-motion"],
    }),
  ],
};
