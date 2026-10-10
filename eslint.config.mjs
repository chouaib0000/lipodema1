import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  { ignores: ['dist/**', '.next/**', 'next-env.d.ts', 'public/**'] },
  {
    rules: {
      // French copy is full of apostrophes; React renders them correctly.
      'react/no-unescaped-entities': 'off',
      // Static export: images are pre-sized files served as-is (no Next image server).
      '@next/next/no-img-element': 'off',
    },
  },
];

export default config;
