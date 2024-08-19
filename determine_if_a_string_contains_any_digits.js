var my_string="find the digits 123 and etc..";
for(var i=0;i<my_string.length;i++){
    if(my_string[i]>='0' && my_string[i]<='9')
    {
        var result=true;
    }
}
if(result){
    console.log("String contains digits");
}
else{
    console.log("String does not contain digits");

}