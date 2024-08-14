var my_array=['e','i','u','i','o','a','i'];
var target_element='i';
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]==target_element)
    {
        count+=1;
    }
}
console.log(count);