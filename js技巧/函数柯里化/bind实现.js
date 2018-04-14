Function.prototype.bind = function(){
	let fn=this
	let args=Array.prototype.slice.call(arguments)
	let obj=args.shift()
	return function(){
		return fn.apply(obj,args)
	}
};