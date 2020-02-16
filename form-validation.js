function process(){

    var today= new Date();
    var dd=today.getDate();
    var mm=today.getMonth()+1;
    var yyyy=today.getFullYear();

    if(dd<10){
        dd='0'+dd
    }  
    if(mm<10){
        mm='0' + mm
    } 
    today=yyyy+'-'+mm+'-'+dd;
    document.getElementById("startDate").setAttribute("min", today);
    document.getElementById("endDate").setAttribute("min", today);
}
function validateData(){
    var eventType=document.getElementById("selectEventType").value;
    var eventTitle=document.getElementById("eventTitle").value;
    var startDate=document.getElementById("startDate").value;
    var endDate=document.getElementById("endDate").value;
    var postingDate=document.getElementById("postingDate").value;

    if(eventType==="" || eventTitle==="" || startDate==="" || endDate==="" || postingDate===""){
        alert("Please do not leave anything blank");
    }
    else{
        alert("Success!");
    }
}