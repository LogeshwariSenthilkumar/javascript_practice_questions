var my_string="Find the number of digits 1234 and etc";
var count=0;
for(var i=0;i<my_string.length;i++)
{
    if(my_string[i]>='0' && my_string[i]<='9')
    {
        count+=1;
    }
}
console.log("No.of Digits",count);