var my_array=[3,9,66,30,50];
var count=0;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]%3==0 && my_array[i]%5==0)
    {
        console.log("First number divisible by 3 and 5 is:",my_array[i]);
        count+=1;
        if(count==1){
            break;
        }
    }
}