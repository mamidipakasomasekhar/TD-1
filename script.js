var change=document.getElementById("typebox");
change.innerHTML="This is from JavaScript";
var msg="Hi Somu";
console.log(msg);
console.log("msg is "+typeof(msg));
console.log("change is "+typeof(change));
var none;
console.log("none is "+typeof(none));
var a=0;
console.log("0 is "+typeof(a));
var b=true;
console.log(typeof(b));
if(a==='0'){
    console.log("print this")
}
function call(ms){
    console.log(ms);
}
function aNormal(ms,callback){
    call(ms);
    callback();
}
aNormal("Somasekhar",function(){
    console.log("Mamidipaka");

});

window.call("somu");
var ob={
    name:"Somasekhar",
    age:20,
    company:"CaddyCode"
};
var ob1={
    name:"Venkatesh",
    age:21,
    company:"CaddyCode"
};
console.log(ob.name);
var arr=[];
arr.push(ob);
arr.push(ob1);
for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
}