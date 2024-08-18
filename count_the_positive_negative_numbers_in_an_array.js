var my_array=[4,-8,7,2,-6];
var count_positive=0;
var count_negative=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>0)
    {
        count_positive+=1;
    }
    else{
        count_negative+=1;
    }
}
console.log("No.of Positive numbers in an array is:",count_positive);
console.log("No.of Negative numbers in an array is:",count_negative);
