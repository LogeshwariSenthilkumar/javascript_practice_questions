var my_array=[3,4,5,6,9];
var target_value=3;
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%target_value==0)
    {
        count+=1;
    }
}
console.log("No.of elements in an array that is multiple of specific number in an array:",count);