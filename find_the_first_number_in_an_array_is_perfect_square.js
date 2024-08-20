var my_array=[5,8,49,6,9,16];
var count=0;
for(var i=0;i<my_array.length;i++){
   var m=my_array[i]**0.5;
   var n=m*m;
   if(n==my_array[i]){
    console.log(my_array[i]);
    count+=1;
    if(count===1)
    {
        break;

    }
   }
} 