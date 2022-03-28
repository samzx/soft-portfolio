export default {
  author: "Sam Xie",
  hero: {
    subtitle: "Software engineer at Cash App.",
    description: "Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.",
    cta: "Browse Products",
  },
  products: {
    featured: [
      {
        name: "DoubleText",
        medium: "React · Go · GraphQL",
        summary: "Facebook Messenger Analyzer",
        copy: [
          "See millions of messages at a glance, without data leaving your computer."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://doubletext.me/"
          }
        },
        images: [
          "/doubletext/0.jpg",
          "/doubletext/1.jpg",
          "/doubletext/2.jpg",
          "/doubletext/3.jpg",
          "/doubletext/4.jpg"
        ]
      },
      {
        name: "ClimbList",
        medium: "React · Next.js",
        summary: "Climbing gym discovery",
        copy: [
          "The comparison site for climbers — coming soon."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Coming Soon",
            url: "https://climblist.com/"
          }
        },
        images: [
          "/climblist/0.jpg",
          "/climblist/1.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Volunteer Portal",
        description: "Portal for tracking volunteering opportunities.",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Final Slash VR",
        description: "Short survival experience on an abandoned planet.",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/final-slash-vr"
        }
      },
      {
        name: "MPH Watch",
        description: "Stats for miners mining on Mining Pool Hub.",
        link: {
          name: "Demo",
          url: "https://mphwatch.samxie.net/demo"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/unimelb.svg",
        url: "https://unimelb.edu.au/"
      },
      {
        src: "/logos/zendesk.svg",
        url: "https://www.zendesk.com/"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://cash.app/"
      }
  ]
  },
  footer: {
    tagline: "Sam Xie — Melbourne, Australia",
    links: [
      {
        name: "Twitter",
        url: "https://twitter.com/samxstudio",
        fa: "fab fa-twitter" // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Medium",
        url: "https://medium.com/@samxie",
        fa: "fab fa-medium"
      },
      {
        name: "Github",
        url: "https://github.com/samzx",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/xiesam/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:contact@samxie.net",
        fa: "fa fa-envelope"
      },
    ]
  }
}