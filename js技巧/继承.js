//原型链继承,父类的属性会变成公有属性,子类的原型对象的构造函数是父类构造函数
//存在的问题：对于引用类型的属性，在一个实例里面修改，其他实例里的属性也会修改
function Son(){}
function Father(){}
Son.prototype = new Father()

// 借用构造函数,为了解决原型链继承的问题
// 在子类型构造函数内部调用超类型构造函数，可以传递参数(没有用到原型链)
// 问题：父类的prototype里面定义的属性和方法在子类中无法使用
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


// 组合继承(组合原型链和借用构造函数) 解决借用构造函数的问题
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
function object(o){
    function F(){}
    F.prototype=o
    return new F()
}


//寄生式继承
function createAnother(original){ 
    var clone=object(original); 
    clone.sayHi=function(){
        alert('hi')
    }
    return clone;
 }

//寄生组合式继承
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
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
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
    alert(this.age);
    }
