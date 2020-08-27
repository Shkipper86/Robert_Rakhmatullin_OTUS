document.addEventListener('click', function(e){
  const t = e.target.TagName;
  const sel = "search"
  e.target.id = sel; 
  getPath(sel);
});
function getPath(sel) { 
console.log(document.querySelector(`#${sel}`));
console.log(document.querySelectorAll(`#${sel}`));
return document.querySelectorAll(`#${sel}`).length;
}
const testModule = (sel)=> {
  document.querySelectorAll('li')[0].id=sel;
  return document.querySelectorAll(`#${sel}`).length;
   }
module.exports = testModule;