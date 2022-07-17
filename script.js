const color=['red','yellow','green','blue','pink','purple','black','aqua','violet'];

function changeColor(){
    const colorIndex= parseInt(Math.random()*color.length);
    document.body.style.background=color[colorIndex];
}