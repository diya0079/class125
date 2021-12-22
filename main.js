nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
diffrence=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550.550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

}

function modelLoaded() {
    console.log('posenet is initialized');
}

function draw() {
    background('#808080');
    document.getElementById("square_size").innerHTML="width and height of the square will be="+diffrence+"px";
    fill('#000000');
    stroke('#A9A9A9');
    square(nosex,nosey,diffrence);
}

function gotposes(results)  {
    if (results.length>0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        diffrence=floor(leftwristx-rightwristx);
        console.log("rightwristx="+rightwristx+"leftwristx="+leftwristx+"diffrence="+diffrence);
    }
}