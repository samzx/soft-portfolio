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
        medium: "React · GraphQL · Golang",
        summary: "The only multi-platform chat analyzer.",
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
        ]
      },
      // {
      //   name: "ClimbList",
      //   medium: "React · Next.js",
      //   summary: "Construction is now in progress.",
      //   copy: [
      //     "Compare and track grades and pricing between gyms around the country.",
      //   ],
      //   links: {
      //     color: "#363636",
      //     primary: {
      //       name: "Learn more",
      //       url: "https://climblist.com/"
      //     }
      //   },
      //   images: [
      //     "/climblist/0.jpg",
      //     "/climblist/1.jpg",
      //   ]
      // }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Volunteer Portal",
        description: "Find and track volunteer opportunities.",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Weightless VR",
        description: "Short survival experience on an abandoned planet.",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/weightless-vr"
        }
      },
      {
        name: "Soft Portfolio",
        description: "Neumorphic personal portfolio website.",
        link: {
          name: "Github",
          url: "https://github.com/samzx/soft-portfolio"
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
        url: "https://unimelb.edu.au/",
        alt: "Unimelb"
      },
      {
        src: "/logos/zendesk.svg",
        url: "https://www.zendesk.com/",
        alt: "Zendesk"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://cash.app/",
        alt: "Cash App"
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