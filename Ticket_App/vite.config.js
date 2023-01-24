import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  jsx: 'babel',
   presets: [
    "@babel/preset-flow",
    ["@babel/preset-env", {
      "debug": true,
      "loose": false,
      "targets": {
        "node": true
      }
    }]
  ],
  plugins: [[react()],["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]]
  // plugins: [
  //   [react()],
  //   ['babel-plugin-import', {
  //     'libraryName': 'antd',
  //     'libraryDirectory': 'es',
  //     'style': 'css'
  //   }],
  //   ['@babel/plugin-transform-react-jsx', {
  //     pragma: 'h',
  //     pragmaFrag: 'Fragment',
  //     useBuiltIns: true
  //   }]
  // ],

})