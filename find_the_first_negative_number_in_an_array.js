var my_array=[3,5,8,-9,10];
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]<0)
    {
      console.log("First negative number in an array:",my_array[i]);
      count+=1;
      if(count==1)
        {
            break;
        }
        
    }
}
