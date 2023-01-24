import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  jsx: 'babel',
  plugins: [
    ['babel-plugin-import', {
      'libraryName': 'antd',
      'libraryDirectory': 'es',
      'style': 'css'
    }],
    ['@babel/plugin-transform-react-jsx', {
      pragma: 'h',
      pragmaFrag: 'Fragment',
      useBuiltIns: true
    }]
  ],

})