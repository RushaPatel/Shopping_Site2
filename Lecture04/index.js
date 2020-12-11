
function abc(arr,index1,index2){
    var c=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=c;
}




function Bubble(arr){
    var a,b
    for(a=0;a<arr.length-1;a++){
        for(b=0;b<arr.length-1;b++){
            if(arr[b]>arr[b+1]){
                abc(arr,b,b+1);
            }
        }
    }return arr;
    
}
console.log (Bubble([5,3,4,2,1]));