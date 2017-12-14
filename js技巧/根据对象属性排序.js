function createCompare(property){
	return function (obj1,obj2){
		var v1=obj1[property];
		var v2=obj2[property];
		if(v1>v2)
		{return 1;}
		else if(v1<v2)
		{return -1;}
		else{
		return 0;
		}

	}
}
var data=[{name:'nico',age:28},{name:'zsy',age:12}];
console.log(data.sort(createCompare("age")))