var my_array=[5,8,6,10,78,89];
var maximum_number=my_array[0];
for(var i=1;i<my_array.length;i++)
{
    if(my_array[i]>maximum_number)
    {
        maximum_number=my_array[i];
    }
}
console.log(maximum_number);