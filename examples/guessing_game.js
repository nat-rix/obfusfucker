m=1000;r=Math.floor(Math.random()*m);u=1;
while(u){v=+prompt("guess num 0 - "+m);if(!(u=!(v===r)))alert("you win!");if(v>r)alert("too big");if(v<r)alert("too small");}
