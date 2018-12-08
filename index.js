$(document).ready(function(){

    var images = [9, 13, 6, 20, 14, 2, 15, 21, 23, 16, 24, 5, 19, 3, 7, 22, 11, 17, 12, 1, 8, 10, 18, 4];

    const ratio = 0.3;
    const width = 577 * ratio;
    const height = 374 * ratio;


    function showDoor(event){
	const id = event.target.id;
	let bits = id.split("_");
	let day = bits[1];
	let img = bits[2];
	let url = `day_${day}/coloured.png`;
	$(this).css('opacity', '1');
	$(this).html(`<img src='${url}' style='width: ${width}px; height: ${height}px; opacity:1;'>`);
	$(this).prop("shown", 1);
	let video = document.getElementById("video");
	video.pause();
	document.getElementById("video_title").innerHTML = `Day ${day}`;
	let source = document.getElementById("video_source");
	source.setAttribute("src",`day_${day}/colouring.mp4`);
	video.load();
	video.play();

    }

    function showNumber(event){
	if(!$(this).prop("shown")){
	    const id = event.target.id;
	    let bits = id.split("_");
	    let day = bits[1];
	    $(this).html(`<div class='door_number'>${day}</div>`);
	}
    }

    function hideNumber(event){
	if(!$(this).prop("shown")){
	    $(this).html("");
	}
    }
    let holder = $("#door_holder");
    let x, y, img, day, door, doors;
    let pos, background, size;
    
    for(let i = 0; i < images.length; i++){

	img = images[i];
	day = i+1;
	x = ((img-1)%3) * width;
	y = (Math.trunc((img-1)/3)) * height;

	pos = `top: ${y}px; left: ${x}px;`;
	background = `background-image: url(originals/FollowHim${img}.png);`;
	size = `background-size: ${width}px ${height}px; width: ${width}px; height: ${height}px;`;

	let id = `door_${day}_${img}`;
	door = $(`<div class='door' style = '${pos} ${size} ${background}' id='${id}'><div class='door_number' id='${id}_number'></div></div>`);

	$(door).click(showDoor);
	$(door).mouseover(showNumber);
	$(door).mouseout(hideNumber);
	holder.append(door);

	console.log("Day " + (i+1) + " img " + images[i] + " x " + x + " y " + y);
    }
});
