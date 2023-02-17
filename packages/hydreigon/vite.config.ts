import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Hydreigon',
      fileName: 'hydreigon',
      formats: ['cjs', 'es', 'umd'],
    },
    sourcemap: true,
  },
  test: {
    coverage: {
      exclude: ['__test__'],
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
});
