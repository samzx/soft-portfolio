export default {
  hero: {
    background: {
      image: "/flight-light.jpg",
    }
  },
  color: {
    link: "#3B70A2",
    text: "#222",
    background: "#eee",
  },
  card: {
    background: "radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%)",
    boxShadow: "20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.8)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0.8), 10px 10px 30px rgba(0, 0, 0, 0.05)"
    },
    button: {
      text: "#222",
      background:  "#fafafa",
      boxShadow: {
        primary: "-4px -4px 10px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(0, 0, 0, 0.2)",
        secondary: "-4px -4px 10px rgba(255, 255, 255, 1), 4px 4px 10px rgba(0, 0, 0, 0.1)"
      },
      hoverIntensity: 1
    }
  },
  screen: {
    width: {
      mobile: 375,
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
