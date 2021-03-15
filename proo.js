function updatedate(){
var date=new Date();
var settime=document.getElementById("settime");
settime.innerHTML=date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var setdate=document.getElementById("setdate");
setdate.innerHTML=date.getDay() + "-" +parseInt(date.getMonth()+1)  + "-" + date.getFullYear();
}
setInterval(updatedate,100);
onload=updatedate();


function getColor(){
    var getcolor=document.getElementById("setcolor").value;
    localStorage.setItem("color",getcolor);
    document.getElementById("time").style.background=localStorage.getItem("color");
    document.getElementById("bodys").style.background=localStorage.getItem("color");
}

//function setColor(){

    
  //  document.getElementById("setcolor").value=localStorage.getItem("color");
    //document.getElementById("time").style.background=localStorage.getItem("color");
    //document.getElementById("bodys").style.background=localStorage.getItem("color");
    //}
    
    
    //setInterval(setColor,100);