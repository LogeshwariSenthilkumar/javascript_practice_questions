var my_array=[-2,-4,-7,9,1,4,6,-5];
var sum=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>0)
    {
        sum+=my_array[i];
    }
}
console.log("Sum of postive number in an array is:",sum)