canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");

mars_img= ["mars1.jpg","mars2.jpg","mars3.jpg","mar4.jpg"];
random=Math.floor(Math.random()*4);


rover_width=100;
rover_height=90;
background_img=mars_img[random];

rover_img="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploder;
    background_imgtag.src=background_img;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploder_rover;
    rover_imgtag.src=rover_img;
}
function uploder(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploder_rover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if(keyPressed="38"){
        up();
    }
    if(keyPressed="40"){
        down();
    }    
    if(keyPressed="37"){
        left();
    }   
     if(keyPressed="39"){
        right();
    }    

}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploder();
        uploder_rover();
    }
}
function down(){
    if(rover_y<=600){
        rover_y=rover_y+10;
        uploder();
        uploder_rover();
        console.log(down);
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploder();
        uploder_rover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploder();
        uploder_rover();
    }
}