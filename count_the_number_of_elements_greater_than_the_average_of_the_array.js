var my_array=[3,6,8,5,2,7];
var sum=0;
var count_number=0;
for(var i=0;i<my_array.length;i++)
{
    sum+=my_array[i];
}
var count=my_array.length;
var average=sum/count;
for(var i=0;i<my_array.length;i++)
{
    if(my_array[i]>average)
    {
        count_number+=1;
    }
}
console.log("No.of elements greater than average is :",count_number)
