# Tools

## Notes
- Key different

  ESLint focuses on semantics, syntax, and code content with enforced rules, while Prettier is solely about code formatting and white space placement.


### Vite
- we're using vite as our build tool here. [Vite Documentation](https://vitejs.dev/)
- our configuration available in [vite.config.js](./vite.config.js)
- so we no longer need the script tags in our `index.html` file for react and react-dom, vite will handle that for us.
- **Important:** When using Vite, the script tag in `index.html` must include `type="module"`. This allows the browser to use native ES Modules, which Vite relies on for its fast development server.
  ```html
  <script type="module" src="./src/App.js"></script>
  ```