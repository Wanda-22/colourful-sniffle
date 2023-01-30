function setup() {
    canvas=createCanvas(640,480);
    canvas.position(111,220);
    t=createCapture(VIDEO);
    t.hide();
    z="";
}

function draw() {
    image(t,0,0,640,480);
    tint(z);
}

function apply() {
    z=document.getElementById('col').value;
}

function snapshot() {
    save('myimage.png');
}