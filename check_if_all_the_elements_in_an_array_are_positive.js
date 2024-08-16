function allArePositive(my_array)
{
    for(var i=0;i<my_array.length;i++)
    {
        if(my_array[i]<=0)
        {
            return false;
        }
    }
    return true;
}


var my_array=[2,8,6,3,1];
console.log(allArePositive(my_array));