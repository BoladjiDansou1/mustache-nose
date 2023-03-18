
noseX=0
noseY=0
function preload() {
 clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
video= createCapture(VIDEO);
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modelloaded)
poseNet.on('pose',gotresult)
}

function modelloaded(){
    console.log("model loaded")
}

function gotresult(results){
if(results.length >0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose x :" + results[0].pose.nose.x);
    console.log("Nose y :" + results[0].pose.nose.y);
}
}

function draw() {
    image(video ,0,0,300,300)
    image(clown_nose,noseX-30,noseY+10,60,50);

}

function take_snapshot(){    
  save('myFilterImage.png');
}
