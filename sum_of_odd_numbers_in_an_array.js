var my_array=[1,5,6,7,3];
var sum=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%2!=0)
    {
        sum=sum+my_array[i];
    }
}
console.log("Sum of odd numbers in an array:",sum)
