/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            'first': ['Ubuntu', 'sans-serif'],
            'kanit' : ['Kanit', 'sans-serif']
        },
        extend: {
            backgroundColor: {
                'first-color' : '#071952'
            }
        },
    },
    plugins: [],
};
