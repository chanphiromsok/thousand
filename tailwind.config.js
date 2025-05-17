/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    /** @type {import("./src/theme/themeVars").ThemeVarsConfig} */
    backgroundColor: {
      primary: "var(--brand-primary)",
    },
    /** @type {import("./src/theme/themeVars").ThemeVarsConfig} */
    textColor: {
      primary: "var(--text-primary)"
    },
    /** @type {import("./src/theme/themeVars").ThemeVarsConfig} */
    borderColor: {
      primary: "var(--accent-blue)"
    },
    // For Android we have to inject via XML here is the explain https://github.com/jsamr/react-native-font-demo
    fontFamily: {
      figtree: ["Figtree"]
    }
  }
}
