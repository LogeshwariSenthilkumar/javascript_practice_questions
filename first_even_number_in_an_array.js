var my_array=[1,4,9,6,3];
count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%2==0)
    {
        console.log("First even number in an array is:",my_array[i]);
        count+=1;
        if(count==1)
        {
            break;
        }
    }
    
}