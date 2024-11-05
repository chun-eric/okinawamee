/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212a2f",
        secondary: "#b6a7a0",
        accent: "#ff4f00",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/*
Navigation


Font: Inter (clean and professional)
Weight: Medium
Size: Small (text-sm)


Headlines (H1, H2, H3)


Font: Poppins (more personality)
H1: text-5xl, font-bold
H2: text-3xl, font-semibold
H3: text-2xl, font-medium
Color: Dark grays for readability


Body Text


Font: Inter (excellent readability)
Size: text-base for main content
Size: text-sm for secondary content
Weight: Regular (400)
Line height: leading-relaxed
Color: Gray-700 for good contrast


Buttons & CTAs


Font: Inter
Weight: Medium
Size: Base


Use Poppins for headlines to add personality
Use Inter for body text and UI elements for readability
Maintain clear hierarchy with size and weight variations
Use consistent spacing (implemented with space-y utilities)
Keep colors in the gray scale for text with blue accents for interactive elements


Inter excels at smaller sizes and UI elements
Poppins works great for headlines with its geometric design
The combination provides both professionalism (Inter) and personality (Poppins)

*/
