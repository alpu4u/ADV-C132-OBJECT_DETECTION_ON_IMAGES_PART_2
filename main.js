img=""
status=""
objects=[]

function preload()
{
    img = loadImage("image1.jpg")
}

function setup()
{
    canvas= createCanvas(640, 420)
    canvas.center()
    objectDetection=ml5.objectDetector("cocossd", modalLoaded)
    document.getElementById('status').innerHTML = "Status = Detecting Objects"
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true
    objectDetection.detect(img, gotResult)
}

function gotResult(error,result)
{
 if (error)
 {
    console.error(error);
 }
 console.log(result);
 objects=result
}