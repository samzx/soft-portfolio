export default {
  hero: {
    background: {
      image: "/falcon-light-plus-50-shadow.png",
    }
  },
  color: {
    link: "#005c89",
    text: "#1d1d1f",
    background: "linear-gradient(160deg, #efefef 0%, #ddd 40%, #ddd 100%)",
    fallbackBackground: "#fff",
  },
  card: {
    // background: "#f8f8f8",
    background: "radial-gradient(145% 145.46% at 0% 0%, #efefef 0%, #eee 100%)",
    boxShadow: "2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.5)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 0.05)"
    },
    button: {
      text: "#222",
      background:  "#efefef",
      boxShadow: {
        primary: "2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.25)",
        secondary: "2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.5)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.2))"
      },
      hoverIntensity: 1
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

// 2px 4px 4px rgba(0,0,0,.45), inset 1px 1px 2px hsla(0,0%,100%,.15)