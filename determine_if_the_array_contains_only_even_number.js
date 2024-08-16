function isEven(my_array)
{
    for(var i=0;i<my_array.length;i++)
    {
        if(my_array[i]%2!=0)
            {
                return false;
            }
    }
  return true;
}

var my_array=[2,4,6,10,8,12];
console.log(isEven(my_array));