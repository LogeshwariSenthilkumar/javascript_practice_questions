var my_array=[0,5,0,9,8,0];
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]!=0)
    {
        console.log("First non zero element in an array is:",my_array[i]);
        count+=1;
        if(count==1)
        {
            break;
        }
    }
}
