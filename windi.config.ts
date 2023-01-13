import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ll: {
                    bg: '#F1F4F6',
                    text: '#434D53',
                    primary: '#0F90E5'
                },
            },
        },
    },
    plugins: [],
})