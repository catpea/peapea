// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

// window.addEventListener('DOMContentLoaded', () => {
//
//   const { Terminal } = require("xterm");
//   const { FitAddon } = require("xterm-addon-fit");
//
//   const root = document.createElement("div");
//   root.style.height = "100%";
//   root.style.width = "100%";
//   root.style.display = "block";
//   document.body.appendChild(root);
//
//   const term = new Terminal();
//   const fitAddon = new FitAddon();
//   term.loadAddon(fitAddon);
//
//   term.open(document.getElementById('xterm-container'));
//   term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
//   fitAddon.fit();
//
//   term.onKey(({ key, ev }) => {
//     console.log(key.charCodeAt(0));
//     if (key.charCodeAt(0) == 13) term.write("\n");
//     term.write(key);
//   });
//
// });




window.addEventListener('DOMContentLoaded', () => {

  window.$ = window.jQuery = require('jquery');

  const graphComponent = require('graph-component');
  const consoleComponent = require('console-component');
  const editorComponent = require('editor-component');
  const blankComponent = require('blank-component');

  const {GoldenLayout} = require('golden-layout/dist/cjs/index.js');
  const config = {
    content: [
      {
        type: "row",
        content: [
          {
            type: "component",
            componentName: "graphComponent",
            componentState: { label: "A" },
          },
          {
            type: "column",
            content: [
              {
                type: "component",
                componentName: "editorComponent",
                componentState: { label: "B" },
              },
              {
                type: "component",
                componentName: "consoleComponent",
                componentState: { label: "C" },
              },
            ],
          },
        ],
      },
    ],
  };

  const myLayout = new GoldenLayout( config );

  myLayout.registerComponent( 'testComponent', blankComponent({}));
  myLayout.registerComponent( 'editorComponent', editorComponent({}));
  // myLayout.registerComponent( 'graphComponent',  blankComponent({}) );
  myLayout.registerComponent( 'graphComponent',  graphComponent({}) );
  myLayout.registerComponent( 'consoleComponent', consoleComponent({}));

  myLayout.init();

}); // DOMContentLoaded
