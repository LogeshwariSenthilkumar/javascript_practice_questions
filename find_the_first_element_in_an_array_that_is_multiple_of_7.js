var my_array=[8,5,6,10,14,4,21];
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%7==0)
    {
        console.log("First element multiple of 7:",my_array[i]);
        count+=1;
        if(count==1)
        {
            break;
        }
    }
}