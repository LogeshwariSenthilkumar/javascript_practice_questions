var my_array=[4,2,5,1,9,8,7];
var sum=0;
for(var i=0;i<my_array.length;i+=2)
{
    sum+=my_array[i];
}
console.log("Sum of elements at even indices is:",sum);