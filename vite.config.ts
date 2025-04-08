import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig(async () => {
    const { default: tailwindcss } = await import('@tailwindcss/vite')
    return {
        plugins: [uni(),tailwindcss()],
    }
});