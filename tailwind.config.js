/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'betterhover': {'raw': '(hover: hover)'},
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
    // References used:
    // - https://yesviz.com/devices.php
    // - https://ricostacruz.com/til/css-media-query-breakpoints
    // - https://tailwindcss.com/docs/responsive-design/#customizing-breakpoints
    screens: {
        xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1159px' }, // Desktop wide.
        xxl: { min: '1359px' } // Desktop widescreen.
      },
      
}
