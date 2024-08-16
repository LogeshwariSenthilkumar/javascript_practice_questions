var my_array=[2,5,9,8,3,1,4];
var sum=0;
var target_value=4;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>target_value)
    {
        sum+=my_array[i];
    }
}
console.log("Sum of elements greater than a value in an array is:",sum);