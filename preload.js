// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.




window.addEventListener('DOMContentLoaded', () => {


  window.$ = window.jQuery = require('jquery');

  var cytoscape = require('cytoscape');
  var {GoldenLayout} = require('golden-layout/dist/cjs/index.js');

  console.log(GoldenLayout);






var config = {
  content: [
    {
      type: "row",
      content: [
        {
          type: "component",
          componentName: "cyComponent",
          componentState: { label: "A" },
        },
        {
          type: "column",
          content: [
            {
              type: "component",
              componentName: "testComponent",
              componentState: { label: "B" },
            },
            {
              type: "component",
              componentName: "testComponent",
              componentState: { label: "C" },
            },
          ],
        },
      ],
    },
  ],
};

var myLayout = new GoldenLayout( config );



myLayout.registerComponent( 'testComponent', function( container, componentState ){
  //console.log(container);
   container._element.innerHTML =  '<h2>' + componentState.label + '</h2>' ;
});


myLayout.registerComponent( 'cyComponent', function( container, componentState ){
  console.log(container);
  console.log(container.element);

  var node = document.createElement("div");
  node.style.height = "100%";
  node.style.width = "100%";
  node.style.display = "block";

  var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);

  container.element.appendChild(node);     // Append <li> to <ul> with id="myList"


container.on( 'open', function(){
    var cy = cytoscape({
      container: node,//: document.getElementById('cy'), // container to render in


      motionBlur: true,
      motionBlurOpacity: 0.2,





      elements: [ // list of graph elements to start with
          { // node a
            data: { id: 'a' }
          },
          { // node b
            data: { id: 'b' }
          },
          { // edge ab
            data: { id: 'ab', source: 'a', target: 'b' }
          }
        ],

        style: [ // the stylesheet for the graph
          {
            selector: 'node',
            style: {
              'background-color': '#666',
              'label': 'data(id)'
            }
          },

          {
            selector: 'edge',
            style: {
              'width': 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier'
            }
          }
        ],

        layout: {
          name: 'grid',
          rows: 1
        }









    });


  })
    // global.cy = cy;
    //
    // var collection = cy.collection();
    // cy.nodes().on('click', function(e){
    //   var clickedNode = e.target;
    //
    //   collection = collection.union(clickedNode);
    //   console.log(collection);
    // });
    //
    // var eles = cy.add([
    //   { group: 'nodes', data: { id: 'n0' }, position: { x: 100, y: 100 } },
    //   { group: 'nodes', data: { id: 'n1' }, position: { x: 200, y: 200 } },
    //   { group: 'edges', data: { id: 'e0', source: 'n0', target: 'n1' } }
    // ]);
    //
    // var b = cy.$('#b');
    // cy.remove( b );

});



myLayout.init();

  return;

  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }



})
