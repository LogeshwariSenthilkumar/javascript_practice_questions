function isNumber(arr2D,target_element)
{
    for(var i=0;i<arr2D.length;i++)
    {
        for(var j=0;j<arr2D.length;j++)
        {
            arr2D[i][j]==target_element;
            return true;
        }
    }
    return false;
}
var arr2D=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
var target_element=7;
var result=isNumber(arr2D,target_element);
console.log(result);