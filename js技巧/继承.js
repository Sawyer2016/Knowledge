//每个构造函数都有prototype
//每个对象的__proto__属性指向自身构造函数的prototype

//原型链继承,父类的属性会变成公有属性,子类的原型对象的构造函数是父类构造函数
//存在的问题：对于父类中引用类型的属性，在一个实例里面修改，其他实例里的属性也会修改
function Son(){}
function Father(){}
Son.prototype = new Father()
Son.prototype.constructor=Son     //子类实例的构造函数变为Son

// 构造函数继承,为了解决原型链继承的问题
// 在子类型构造函数内部调用超类型构造函数，可以传递参数(没有用到原型链)
// 问题：父类的prototype里面定义的属性和方法在子类中无法使用。通常会把方法定义在prototype，
// 这样每次实例化不用再创建一遍方法，但是这样会造成子类无法复用父类方法
function SuperType(){
    this.colors = ["red", "blue", "green"];
}
 function SubType(){
//继承了 SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);    //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors);    //"red,blue,green"


// 组合继承(组合原型链和构造函数) 解决借用构造函数的问题
// 父类的属性相关的函数就赋给父类原型，如果是子类属性就赋给子类原型
//问题：会调用两次超类型构造函数（一次是在创建子类型，一次是在子类型内调用父类构造函数）
function SuperType(name){
        this.name = name;
        this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
    };
function SubType(name, age){
//继承属性 
    SuperType.call(this, name);
    this.age = age;
}
//继承方法
SubType.prototype = new SuperType(); 
SubType.prototype.constructor = SubType; 
SubType.prototype.sayAge = function(){
    alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();
//"red,blue,green,black"
//"Nicholas";
//29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors);
instance2.sayName();
instance2.sayAge();
// "red,blue,green"
// "Greg";
// 27


//原型式继承
//问题：父类的引用属性会被所有子类共享
function object(o){
    function F(){}
    F.prototype=o
    return new F()
}

//该函数等同于 Object.create(obj)



//寄生式继承
//增加了方法
function createAnother(original){ 
    var clone=object(original); 
    clone.sayHi=function(){
        alert('hi')
    }
    return clone;
 }

//寄生组合式继承
// function inheritPrototype(subType, superType){
//     var prototype = object(superType.prototype);
//     prototype.constructor = subType;
//     subType.prototype = prototype;
// }
function inheritPrototype(subType, superType){
    let proto=Object.create(superType.prototype)
    proto.constructor=subType
    subType.prototype = proto

}
function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
    alert(this.name);
};
function SubType(name, age){
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);  //对父类原型的复制，不会调用两次构造函数
SubType.prototype.sayAge = function(){
    alert(this.age);
    }

//class继承
class A {}
class B extends A 
{
  constructor() {   
    super();
  }
}


//object.setPrototypeOf()  
//设置一个对象的__proto__属性，作用等同于__proto__
//object.setPrototypeOf(obj,proto)

//object.getPrototypeOf()  
//获取一个对象的__proto__