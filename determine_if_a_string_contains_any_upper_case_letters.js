var str="hello";
for(var i=0;i<str.length;i++)
{
    var charcode=str.charCodeAt(i);
    if(charcode>=65 && charcode<=90)
    {
        var result="true";
    }
}
if(result)
{
    console.log("Contain upper case letter");
}