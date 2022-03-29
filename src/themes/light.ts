export default {
  hero: {
    background: {
      image: "/falcon-light-plus-50-shadow.png",
    }
  },
  color: {
    link: "#005c89",
    text: "#222",
    background: "linear-gradient(160deg, #fff 0%, #ddd 40%, #ddd 100%)",
    fallbackBackground: "#fff",
  },
  card: {
    // background: "#f8f8f8",
    background: "radial-gradient(145% 145.46% at 0% 0%, #FFF 0%, #EEE 100%)",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.8)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 0.05)"
    },
    button: {
      text: "#222",
      background:  "#fafafa",
      boxShadow: {
        primary: "-4px -4px 10px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(0, 0, 0, 0.2)",
        // secondary: "-4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px rgba(0, 0, 0, 0.1)",
        secondary: "-4px -4px 10px rgba(255, 255, 255, 0.75), 4px 4px 10px rgba(0, 0, 0, 0.1)",
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
