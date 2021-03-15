function insert(num){ 
   document.querySelector(".box").value += num;
}
var solve = () =>{
   let x = document.querySelector(".box").value;
   let y = eval(x);
   document.querySelector(".box").value = y; 
}
var clr = () => {
    document.querySelector(".box").value = "";
}