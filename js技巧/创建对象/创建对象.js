//1
var obj=new Object()
obj.name="hello"
obj.age=23

//2
var obj={name:'hello', age:23}

//以上都会产生大量重复代码

//工厂模式 新建一个函数，里面新建一个对象，返回对象
function createPerson(name,age){
	var obj=new Object()
	obj.name=name
	obj.age=age
	return obj
}
var person1=createPerson('hello',23)

//构造函数模式  新建一个构造函数,使用this
function Person(name,age){
	this.name=name
	this.age=age
}
var person1 = new Person(name,age)

//原型模式
function Person(){

}
Person.prototype = {
	constructor:Person,
	name:'hello',
	age:23
}
var person1=new Person()

//组合构造函数和原型  节省内存，每个实例都会有属于自己的属性，和一些公有的方法
function Person(name,age){
	this.name=name
	this.age=age
}
Person.prototype={
	constructor:Person,
	sayName:()=>{
		console.log(this.name)
	}
}


//寄生构造函数 在构造函数中新建一个对象并返回
function Person(name,age){
	var obj=new Object()
	obj.name=name
	obj.age=age
	obj.sayName=()=>{
		console.log(this.name)
	}
	return obj
}
var person1=new Person('hello',23)