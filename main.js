video = "";
status = "";

function preload()
{

}

function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();

    video = createCapture(500,400);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

    document.getElementById("text_box").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 500, 400);
}