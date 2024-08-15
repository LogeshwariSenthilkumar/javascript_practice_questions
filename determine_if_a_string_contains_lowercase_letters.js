var str="World";
for(var i=0;i<str.length;i++)
{
    var charcode=str.charCodeAt(i);
    if(charcode>=97 && charcode<=122)
    {
        var result="true";
    }
}
if(result)
{
    console.log("contain lowercase letter");
}