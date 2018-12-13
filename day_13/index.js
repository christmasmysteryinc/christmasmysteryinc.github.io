var img;
var words = ["O","come","O","come", "Emmanuel"]
var index = 0;
var framesPerWord = 25;
var framesThisWord = 0;

function preload(){
    img = loadImage("halfcolouredx2.png");
}

function setup(){
    createCanvas(1170,748);
//    image(img,0,0);
    textAlign(CENTER, CENTER);
//    frameRate(1);
}

function draw(){
    if(framesThisWord >0){
	framesThisWord --;
	return;
    }
    if(framesThisWord <= 0){
	framesThisWord = framesPerWord;
	if(framesPerWord >2){
	    framesPerWord--;
	}
    }
    if(millis() > 60000){
	words = ["Rejoice", "rejoice", "Emmanuel", "shall", "come", "to", "you"];
    }
//    var x = noise(millis()/1000) * width;
    //    var y = noise(1000000+millis()/1000) * height;
    var x = random(0,width);
    var y = random(0,height);
    //    var size = round(random(10,80));
    var size = round(80*exp(millis()/-100000)); // get to 10 pt after 2 mins
    textSize(size);
    var opacity = 255-(3*size);

    var wordWidth = textWidth(words[index]);
    /*
    var leftColourVals = img.get(constrain(x  - wordWidth/2, 0, width), y);
    var leftC  = color(leftColourVals[0], leftColourVals[1], leftColourVals[2], opacity);    console.log("Left colour ");
    console.log(leftColourVals);
    console.log(leftC);
    */
    /*
    var rightColourVals = img.get(constrain(x+ wordWidth/2,0,width) , y);
    var rightC = color(rightColourVals[0], rightColourVals[1], rightColourVals[2], opacity);
    console.log("Right colour ");
    console.log(rightColourVals);
    console.log(rightC);

*/
    var centreColourVals = img.get(x,y);
    

    var colour = color(centreColourVals[0], centreColourVals[1], centreColourVals[2], opacity);

    console.log("Centre colour ");
//    console.log(centreColourVals);
    console.log(colour);

    //    var colour = lerpColor(leftC, rightC, 0.5);


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

