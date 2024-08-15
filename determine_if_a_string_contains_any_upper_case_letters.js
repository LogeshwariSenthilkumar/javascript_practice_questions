var str="Hello";
for(var i=0;i<str.length;i++)
{
    var charcode=str.charCodeAt(i);
    if(charcode>=65 && charcode<=90)
    {
        console.log("True");
    }
}