var my_array=[5,7,9,3,1,6];
var minimum_number=my_array[0];
for(var i=1;i<my_array.length;i++)
{
    if(my_array[i]<minimum_number)
    {
        minimum_number=my_array[i];
    }
}
console.log("Minimum number is:",minimum_number);