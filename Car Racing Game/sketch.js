var button,button1
var input 
var heading,heading1
var pc =0
var gs =0
var crap 
var b99
var c1,c2
var limiter
var ar = []
var xyz= 0 
var dabba,basta,tiffin


function preload(){
dabba=loadImage("Photos/images/track.jpg")
basta=loadImage("Photos/images/car3.png")
tiffin=loadImage("Photos/images/car4.png")
}


function setup() {

createCanvas(displayWidth - 20, displayHeight-30);

button=createButton("Private Game")
button.position(window.innerWidth/2.2,450)
button.style("height"," 25px")
button.style("width", "170px")

input=createInput()
input.attribute("placeholder","Write Name")
input.style("textAlign","CENTER")
input.position(window.innerWidth/2.2,400)
input.style("width", "170px")

button1=createButton("reset")
button1.position(1000,50)
button1.mousePressed(reset)

heading=createElement("h1")
heading.html("Asphalt 9")
heading.position(window.innerWidth/2.2,100)

crap=firebase.database()
crap.ref("PlayerCount").on("value",function(data){pc=data.val()} )

crap.ref("GameState").on("value", function(data){gs=data.val()})


button.mousePressed(Enter)

c1=createSprite(200,100,10,20)
c2=createSprite(400,100,20,10)
ar= [c1,c2]

c1.addImage("rustom",basta);
c2.addImage("raeees",tiffin);
}



function draw() {
background("grey")

if(pc===2){
gs=1
crap.ref("/").update({GameState:gs})
}
if(gs===1&&limiter===undefined){
crap.ref("Players").on("value",function(data){limiter=data.val()})
}
if(gs===1){
    image(dabba,1,-displayHeight,window.innerWidth,displayWidth*5)
    drawSprites();
    var x=500
    var index=0
    if(ar[xyz-1].y<(-717)){
        alert("PLAY MY GAME AGAIN IF YOU DON'T I KNOW WHERE YOU LIVE. THANK YOU")}
for(var i in limiter){
ar[index].x=x
x=x+450
ar[index].y=limiter[i].y 
if(index===xyz-1){camera.position.y=ar[xyz-1].y}

index=index+1
}
if(keyDown("up")){
    ar[xyz-1].y-=40
    crap.ref("Players/Player"+xyz).update({y:ar[xyz-1].y})   
}
}
}



function Enter(){
pc=pc+1
xyz=pc
crap.ref("/").update({PlayerCount:pc})
crap.ref("Players/Player"+pc).set({y:6043})
heading1=createElement("h1")
b99=input.value()
heading.html("Wassup " +b99)
heading.position(550,50)
input.hide()
button.hide()
}

function reset(){
crap.ref("/").update({GameState:0,PlayerCount:0})
crap.ref("Players").remove()
}

