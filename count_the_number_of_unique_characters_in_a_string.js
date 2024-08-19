var my_string="hello world";
var target_value='e';
var count=0;
for(var i=0;i<my_string.length;i++)
{
    if(my_string[i]==target_value)
    {
       count+=1;
    }
}
console.log("No.of unique character is present",count);