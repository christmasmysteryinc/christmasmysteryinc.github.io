var img;
var words = ["O","come","O","come", "Emmanuel"]
var index = 0;

function preload(){
    img = loadImage("halfcolouredx2.png");
}

function setup(){
    createCanvas(1170,748);
    background(255);
    textAlign(CENTER, CENTER);
}

function draw(){
    if(millis() > 60000){
	words = ["Rejoice", "rejoice", "Emmanuel", "shall", "come", "to", "you"];
    }

    var x = random(0,width);
    var y = random(0,height);

    var size = round(80*exp(frameCount/-2000)); 
    textSize(size);
    var opacity = 255-(3*size);

    var centreColourVals = img.get(x,y);

    var colour = color(centreColourVals[0]*random(0.95,1.05), centreColourVals[1]*random(0.95,1.05), centreColourVals[2]*random(0.95,1.05), opacity);


    fill(colour);

    translate(x,y);

    if(random([false,true])){
	rotate(PI / 2.0);
    }

    text(words[index],0,0);

    index++;
    if(index >= words.length){
	index = 0;
    }
}

function keyPressed(){
    saveCanvas("coloured" , "png");
}
