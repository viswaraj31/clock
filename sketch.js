var hr,sc,m,hra,sca,ma
function setup() {
  createCanvas(400,400);
   
    
    angleMode(DEGREES); 
}

function draw() {
  background(0,0,0);  
  
  translate(200,200);
  rotate(-90)

  hr = hour()
  m = minute()
  sc =second()

  hra = map(hr%12,0,12,0,360);
  ma = map(m,0,60,0,360);
  sca = map(sc,0,60,0,360);

  push()
    rotate(sca)
    stroke("red");
    strokeWeight(6);
    line(0,0,100,0);
  pop()
  push()
    rotate(ma)
    stroke("blue");
    strokeWeight(7);
    line(0,0,70,0);
  pop()
  push()
    rotate(hra)
    stroke("yellow");
    strokeWeight(8);
    line(0,0,40,0);
  pop()

  stroke("red");
  strokeWeight(4);
  noFill()
  arc(0,0,300,300,0,sca);

  stroke("blue");
  arc(0,0,260,260,0,ma);

  stroke("yellow");
  arc(0,0,220,220,0,hra);

}