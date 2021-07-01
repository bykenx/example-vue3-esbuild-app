import esbuild from 'esbuild'
import path from 'path'
import fs from 'fs'
import chalk from 'chalk'

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
    {
      name: 'plugin-assets-loader',
      setup(build) {
        build.onLoad({ filter: /\.svg/ }, (args) => {
          return {
            contents: fs.readFileSync(args.path),
            loader: 'file'
          }
        })
      }
    },
    {
      name: 'plugin-clean-dist',
      setup(build) {
        const cwd = build.initialOptions.absWorkingDir || process.cwd()
        const distDir = path.resolve(cwd, build.initialOptions.outdir)
        build.onStart(() => {
          console.log(chalk.green('🚀 Start build.'))
          console.log(chalk.green(`🗑  Remove: ${distDir}`))
          fs.rmSync(distDir, { recursive: true, force: true })
        })
        build.onEnd((result) => {
          console.log(chalk.green('✅ End build.'))
        })
      }
    }
  ],
  chunkNames: '[name]-[hash]',
  entryNames: '[name]-[hash]',
  assetNames: '[name]-[hash]',
  outdir: 'dist',
})
