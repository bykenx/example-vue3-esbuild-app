
import { htmlPlugin } from 'esbuild-plugin-html-template'
import { vuePlugin } from 'esbuild-plugin-vue-sfc'
import esbuild from 'esbuild'
import path from 'path'

const root = process.cwd()

esbuild.build({
  entryPoints: [
    path.join(root, 'src', 'main.js'),
  ],
  bundle: true,
  write: false,
  plugins: [
    htmlPlugin(),
    vuePlugin({
      preprocessStyles: true,
    }),
  ],
  outdir: 'dist',
}).then(result => {

})
