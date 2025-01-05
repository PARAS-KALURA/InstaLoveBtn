const con = document.querySelector("#container") // selected container
const love = document.querySelector("i")//selected icon

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%,-50%) scale(1)"; // love isme bada ho jata hai 
    love.style.opacity = "0.7";

    setTimeout(function(){
        love.style.opacity = 0;
    },2000); 

    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    },3000); // 3 sec baad execute hoga scale 0 means gayab ho jayega .
});

// setTimeout - it is a function in browser simply use to delay 

// setTimeout(function(){
//   // here what to run
// },2000);