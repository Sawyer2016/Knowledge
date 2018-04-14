function curryIt(fn){
let curry=function(){
	let args=[]
	let num=0
	function hello(arg){
		args.push(arg)
		num++
		if(num<3){
			return hello
		}else{
			return fn(...args)
		}
	}
	return hello
}
	return curry()
}
var f = function (a, b, c) {return a + b + c}
console.log(curryIt(f)(1)(2)(10))
