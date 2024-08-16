var my_array=[8,7,0,5,4,1];
var target_value=7;
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>target_value)
    {
        console.log("First element greater than a given value is:",my_array[i]);
        count+=1;
        if(count==1)
        {
            break;
        }
    }
}