//模拟一段ajax请求
function ajax(content) {
  console.log('ajax request ' + content)
}

//函数防抖
//延迟一段时间后执行，如果在这期间又调用的话取消上一次执行
function debounce(fun, delay) {
    var timer=null;
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(timer)
        timer = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}
    
let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 500)

inputb.addEventListener('keyup', function (e) {
        debounceAjax(e.target.value)
    })




//函数节流与函数防抖（如果没有duration，就是函数防抖）
//函数节流：一段时间内只能执行一次
function throttle(fn, delay,duration){
    var timer=null;
    var begin = new Date()
    return function(args){
        var now=new Date()
        clearTimeout(timer);
        if(duration){
            if(now -begin>=duration){
                fn(args)
                begin=now
            }
        }else{
            timer=setTimeout(()=>{
                fn(args)},delay)
        }
    }
}
    