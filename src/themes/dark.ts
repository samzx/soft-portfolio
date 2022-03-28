export default {
  hero: {
    background: {
      image: "/falcon-dark-minus-50-brightness.png",
    }
  },
  color: {
    link: "#4bafbd",
    text: "#fff",
    background: "linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #1a1a1a 100%)",
    fallbackBackground: "#2a2a2a",
  },
  card: {
    // background: "#141414",
    background: "radial-gradient(145% 145.46% at 0% 0%, #111 0%, #000 100%)",
    // background: "linear-gradient(135deg, #111 0%, #000 100%)",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.5), -20px -20px 60px rgba(255, 255, 255, 0.05)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 1)"
    },
    button: {
      text: "#fff",
      background:  "#0f0f0f",
      boxShadow: {
        primary: "-4px -4px 10px rgba(255, 255, 255, 0.08), 4px 4px 10px rgba(0, 0, 0, 0.5)",
        secondary: "-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.8)",
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
