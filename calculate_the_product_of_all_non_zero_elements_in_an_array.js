var my_array=[4,0,9,6,5,3];
var product=1;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>0)
    {
        product*=my_array[i];
    }
}
console.log("Product of non zero elements",product);
