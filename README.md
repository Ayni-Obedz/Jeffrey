# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```


Now things this webstie would contain in addition to the reference website features i uploaded.

* The main di when the website is accessed won't contain a picture of the personnel, rather an nice background with boldly written text. Also 2 buttons
* Analytics- for the success and work stuff
* Work-https://www.robwdavidson.com/portfolio?jump=posts, how the work is arranged here.
* My career- made to show all the works his done over the year
* Service- services offers, each service having it's own color desing.(this entire div having an animation)
* About me- Includes image that would blend into the background(we'll work on this when we get there). This page would be different from the rest, It'll also include download CV and contact, social media handles.
* Contact me- have social media handles.
* Lets start the website then, the main/first page or div then



These are the line numbers in the NetworkHero.tsx I gave you last. If you’ve edited the file since, yours may be slightly off.

// 1. The container (the main widening change)

// Lines 285 and 286: className="relative [container-type:size]" and the style={{ aspectRatio: aspect, width: ... }} line. These replaced the old aspect-square w-[min(...)] class.

// 2. Where aspect comes from

// Lines 12 to 15: MIN_ASPECT, MAX_ASPECT and calcAspect. Change MAX_ASPECT on line 13 to make it wider or narrower.
// Line 60: const [aspect, setAspect] = useState(calcAspect);
// Line 64: the onResize handler, inside the resize effect that starts around line 63.

// 3. Lines stretch with the container

// Line 288: preserveAspectRatio="none" on the <svg>.

// 4. Circle and light sizes

// Line 343: width: ${n.size}cqh``, which sets each person’s circle size.
// Lines 311, 317 and 323: the pulse, flash and ring sizes (w-[24cqh], w-[30cqh], w-[16cqh]).

// 5. Physics using width and height separately

// Lines 91 and 92: let W and let H.
// Lines 98 and 99: W = rect.width and H = rect.height.
// Lines 101 to 103: canvas size and scale.
// Line 109: const R = H * 0.16.
// Lines 115 and 116: node push from the cursor.
// Lines 137 to 140: the lines following the nodes.
// Line 144 plus lines 147 and 148: clearing the canvas and the font sizes.
// Lines 154 to 157: character positions along the lines.
// Line 181: the light wave position.

// If you’re only widening it, lines 13, 285 and 286 are the ones to look at first. In VS Code, press Ctrl+G and type a number to jump to a line.
