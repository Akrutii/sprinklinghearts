 const bodyEl= document.querySelector("body")

 bodyEl.addEventListener("mousemove", (event)=>{
    const xpos= event.offsetX;
    const ypos= event.offsetY;

    //const spanEl= document.querySelector("span");
    const spanEl =document.createElement("span");
    spanEl.style.left= xpos + "px";
    spanEl.style.top= ypos + "px";
    /*here we double hearts on scrolling, hence in stylesheet of span element we add pointer-events*/

    // to create the hearts of different sizes
    const size= Math.random()*80;      //varies b/w 0 and 1, hence multiplied with 100 to vary b/w 0-100
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    //to remove the hearts after some while, on scrolling
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
});
