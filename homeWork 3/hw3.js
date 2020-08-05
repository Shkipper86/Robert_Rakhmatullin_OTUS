class CustomElement extends HTMLElement{
    constructor (){
       super()
       tree.attachShadow({mode: 'open'})            
    }
   connectedCallback(){
const data = {
    "HP": {
      "3PAR": {},
      "ProLiant": {}
    },
    "Lenovo": {
      "Blade Switch": {
        "BNT Layer 2/3 Copper GbE": {},
        "IBM Flex System EN2092": {}
      },
      "Server": {
        "ThinkCentre A57": {},
        "ThinkSystem SR650": {}
      }
    }
  };
  function myTree(container, data) {    
    container.appendChild(myLeaf(data));              
  }
  function myLeaf(data) { 
    let ul = document.createElement('ul');  
    for(let key in data) {
       let li = document.createElement('li');
          li.innerHTML = key;
          let childrenUl = myLeaf(data[key]); 
          if (childrenUl) li.appendChild(childrenUl);
          ul.appendChild(li);   
      }
      return ul;      
  }     
  const container = document.getElementById('tree');
  tree.shadowRoot.innerHTML=  myTree(container, data);
 };
}
customElements.define("my-tree", CustomElement)
