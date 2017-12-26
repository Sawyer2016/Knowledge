/* 获取节点 */    
var oUl = document.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
/* 创建img标签函数 */    
function createImg(obj){
    var src = '';
    src = obj.getAttribute('data-src');   
    if(obj.children.length <= 1){
        var img = document.createElement('img');
        img.src = src;
        obj.appendChild(img);
    }
}

    
/* 滚动实时计算所到区域并进行相关计算 */
window.onscroll = function(){
    for(var i=0;i<aLi.length;i++){
        if(aLi[i].getBoundingClientRect().top<document.body.clientHeight){ 
           createImg(aLi[i])
        }
    } 
}

/* 页面加载完便执行一次滚动函数 */
window.onload = function(){
    window.onscroll();
}