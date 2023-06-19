/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// import merge from 'deepmerge';
// // use createSpaConfig for bundling a Single Page App
// import { createSpaConfig } from '@open-wc/building-rollup';
// import visualizer from 'rollup-plugin-visualizer';
// import styles from 'rollup-plugin-styles';
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve';
import html from 'rollup-plugin-html';

// // use createBasicConfig to do regular JS to JS bundling
// // import { createBasicConfig } from '@open-wc/building-rollup';

// const baseConfig = createSpaConfig({
//   // use the outputdir option to modify where files are output
//   // outputDir: 'dist',

//   // if you need to support older browsers, such as IE11, set the legacyBuild
//   // option to generate an additional build just for this browser
//   // legacyBuild: true,

//   // development mode creates a non-minified build for debugging or development
//   developmentMode: process.env.ROLLUP_WATCH === 'true',

//   // set to true to inject the service worker registration into your index.html
//   injectServiceWorker: false,

//   nodeResolve: {
//     exportConditions: ['browser', 'production'],
//   },
// });

// export default merge(baseConfig, {
//   // if you use createSpaConfig, you can use your index.html as entrypoint,
//   // any <script type="module"> inside will be bundled by rollup
//   input: './index.html',

//   // alternatively, you can use your JS as entrypoint for rollup and
//   // optionally set a HTML template manually
//   // input: './app.js',

//   plugins: [
//     styles({
//       mode: 'extract',
//     }),
//     visualizer({
//       brotliSize: true,
//       gzipSize: true,
//     }),
//     alias({
//       // Define your aliases here
//       entries: [
//         { find: '@spectrum-web-components/button', replacement: '@swc-uxp-wrappers/button' }, // alias for component
//       ],
//     }),
//   ],

//   moduleContext: {
//     [require.resolve('focus-visible')]: 'window',
//   },
// });

export default {
  input: 'src/index.js', // Replace 'src/main.js' with the entry point of your application
  output: {
    dir: 'dist', // Replace 'dist' with the desired output directory
    format: 'es', // Choose the desired output format (e.g., ES modules)
  },
  plugins: [
    html(),
    alias({
      // Define your aliases here
      entries: [
        { find: '@spectrum-web-components/tooltip', replacement: '@swc-uxp-wrappers/tooltip' }, // alias for component
      ],
    }),
    resolve({
      // Specify custom options for the resolve plugin
      browser: true, // Resolve modules in a browser environment
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Specify the extensions to be resolved
      customResolveOptions: {
        moduleDirectory: 'node_modules', // Specify the module directory (optional)
      },
    }),
  ],
};
