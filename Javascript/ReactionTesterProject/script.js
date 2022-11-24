
var start = new Date().getTime();
function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function makeshapeAppear() {
    var top = Math.random() * 400;
    var left = Math.random() * 400;
    var width=Math.random() * 400;
    var height=(Math.random() * 200)+100;
    if(Math.random()>0.50){
        document.getElementById("shapes").style.borderRadius="50%";
    }else{
        document.getElementById("shapes").style.borderRadius="0";
    }
    document.getElementById("shapes").style.backgroundColor= getRandomColor();
    document.getElementById("shapes").style.width= width + "px";
    document.getElementById("shapes").style.height= width + "px";
    document.getElementById("shapes").style.top=top + "px";
    document.getElementById("shapes").style.left=left + "px"
    document.getElementById("shapes").style.display = "block";
    start = new Date().getTime();
}
function appearAfterDelay() {
    setTimeout(makeshapeAppear, Math.random() * 2000);
}
appearAfterDelay();
document.getElementById("shapes").onclick = function () {
    document.getElementById("shapes").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "sec";
    appearAfterDelay();
}
