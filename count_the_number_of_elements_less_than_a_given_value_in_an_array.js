var my_array=[3,6,1,2,9,8];
var count=0;
var target_value=6;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]<target_value)
    {
        count+=1;
    }
}
console.log("No.of elements less than a given value in an array is:",count);