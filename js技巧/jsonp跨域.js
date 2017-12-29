function createScript(url){
  var node=document.getElementsByTagName("head")[0]
  var sc=document.createElement('script')
  sc.type="text/javascript"
  sc.src=url
  node.appendChild(sc)
}
function callback(data){
  console.log(data)
}
function getjson(){
  createScript("img/json.js?callback=callback")
}