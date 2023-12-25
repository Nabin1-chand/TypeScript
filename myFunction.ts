function addTwo(num :number){
    return  num + 2;

}
addTwo(5);


function  getUpper(val:String){
    return val.toUpperCase()
}

getUpper('nabin');

function signUpUser(name:String, email:String,isPaid:boolean){

}
let loginUser =(name:String,email:String, isPaid:boolean= false)=>{}

console.log(loginUser('subash','@gmail.com'));
console.log(signUpUser("Nabin",'nabin@gmail.com',true))

const getHello=(s:String):String=>{
    return "";
}
const  heros  =["thor","spiderman","ironman"];
heros.map((hero:String)=>{
    return `hero is ${hero}`;
})


function consoleError(errmsg:String):void{
    console.log(errmsg );
    
}
console.log(consoleError);
export { };
  