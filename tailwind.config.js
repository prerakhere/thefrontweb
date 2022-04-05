const { spacing, fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
      },
      fontFamily: {
        sans: ["PT Sans", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.purple.800"),
              "&:hover": {
                color: theme("colors.purple.900"),
              },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.purple.300"),
              "&:hover": {
                color: theme("colors.purple.400"),
              },
            },
            "h1,h2,h3,h4": {
              color: theme("colors.gray.200"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
}
