var my_array=[9,8,7,5,3,1];
var target_value=3;
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%target_value==0)
    {
        count+=1;
    }
        
}
console.log("NO.of elements divisible by specific number in an array is:",count);