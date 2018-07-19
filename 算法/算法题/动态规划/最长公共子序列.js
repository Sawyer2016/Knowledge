function getRes(arr1,arr2){
	let row=arr1.length
	let col=arr2.length
	let result=new Array()
	result[-1]=new Array(col).fill(0)
	for(let i=0;i<row;i++){
		result[i]=new Array(col).fill(0)
		for(let j=0;j<col;j++){
			let leftValue=j-1>=0?result[i][j-1]:0
			let tmp=Math.max(result[i-1][j],leftValue)
			if(arr1[i]!=arr2[j]){
				result[i][j]=tmp
			}else{
				result[i][j]=tmp+1
			}
		}
	}
	return result
}
let arr1=[1,3,5,4,2,6,8,7]
let arr2=[1,4,8,6,7,5]
console.log(getRes(arr1,arr2))