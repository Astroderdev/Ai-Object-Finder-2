var status_check = "";
var cocossd = "";
var inputvalue = document.getElementById("inputobject").value;
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    background("lightblue");
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    cocossd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(video, 0, 0, 640, 420);
}
function modelLoaded(){
    console.log("cocossd is loaded");
    status_check = true;
    cocossd.detect(video, gotResults);
}
function gotResults(results, error){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}