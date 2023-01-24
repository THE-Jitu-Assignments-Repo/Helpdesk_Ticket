import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  // jsx: 'babel',
  plugins: [
    react(),
    ['babel-plugin-import', {
        'libraryName': 'antd',
        'libraryDirectory': 'es',
        'style': 'css'
    }],
    ['@babel/plugin-transform-react-jsx', {        pragma: 'h',        pragmaFrag: 'Fragment',        useBuiltIns: true    }]
]

})