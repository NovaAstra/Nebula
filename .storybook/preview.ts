import type { Preview } from "@storybook/vue3";

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark
      },
      light: {
        ...themes.light
      },
    }
  },
};

export default preview;
