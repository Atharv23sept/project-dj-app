var song1="";
var song2="";
leftWristx = 0;
leftWristy= 0;
rightWristX = 0;
rightWristY = 0;


function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("leftWristx =" + leftWristx + "leftWristy =" + leftWristy )

        rigthtWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX + "RightWristY =" + rightWristY )
    }
}