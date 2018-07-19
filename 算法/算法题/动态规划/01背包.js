function getRes(items,weight){
	let itemsNumber=items.length
	let column=weight+1
	let array=new Array()
	array[-1]=new Array(weight+1).fill(0)
	for(let i=0;i<itemsNumber;i++){
		array[i]=new Array()
		for(let j=0;j<column;j++){
			if(j<items[i][0]){
				array[i][j]=array[i-1][j]
			}else{
				array[i][j]=Math.max(array[i-1][j],items[i][1]+array[i-1][j-items[i][0]])
			}
		}
	}
    return array[itemsNumber-1][weight]
}



let arr=[[2,6],[2,3],[6,5],[5,4],[4,6]]
let w=10
console.log(getRes(arr,w))

//优化方法

//1.滚动数组，即两行数组存储最优解