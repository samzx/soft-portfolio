export default {
  hero: {
    background: {
      image: "/falcon-dark-minus-50-brightness.png",
    }
  },
  color: {
    link: "#4bafbd",
    text: "#f5f5f7",
    background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #1a1a1a 100%)",
    fallbackBackground: "#2a2a2a",
  },
  card: {
    // background: "#141414",
    background: "linear-gradient(141.65deg,#151515 15.17%,#050505 86.5%)",
    // background: "linear-gradient(135deg, #111 0%, #000 100%)",
    boxShadow: "2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 1)"
    },
    button: {
      text: "#fff",
      background:  "#151515",
      boxShadow: {
        primary: "2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",
        secondary: "2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.66), rgba(255,255,255,0.2))"
      },
      hoverIntensity: 0.25
    }
  },
  screen: {
    width: {
      mobile: 360,
      tablet: 600,
      desktop: 980
    },
    padding: {
      mobile: 20,
      tablet: 20,
      desktop: 48
    }
  }
}
