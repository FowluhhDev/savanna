import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['source/savanna.ts'],
  format: ['cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  minify: false
});