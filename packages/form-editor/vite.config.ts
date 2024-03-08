import createViteConfig from '@decision-survey/shared/vite';
import pkg from './package.json';

export default ({ mode }: {mode: string}) => createViteConfig({}, {
  mode,
  pkg,
  features: {
      react: true,
      css: true,
      dom: true,
  },
});