const overlap = "50%"

Draggable.create(".paintbrush", {
    bounds:"body",
    onDrag: function(){
        const dropArea = document.querySelector('.wood')
        if(this.hitTest(dropArea, overlap)){
            (this.target).classList.add("dropper");
        }else{
            (this.target).classList.remove("dropper");
        }},
    onDragEnd: function(){
        const wood = document.querySelectorAll('.wood path')
        if(this.target.classList.contains("dropper")){
            wood.forEach(wood =>{
                // wood.classList.add(".paint-fence")
                wood.style.fill= "blue"
                setTimeout(()=>{TweenLite.to(this.target, 0.2,{
                    x:0,
                    y:0,
                })}, 1000)
            })
        }else{
            TweenLite.to(this.target, 0.2,{
                x:0,
                y:0,
            })
        }
    }    
});

Draggable.create(".bird-seed", {
    bounds:"body",
    onDrag: function(){
        const bird = document.querySelector(".bird")
        const dropArea = document.querySelector(".birdhouse")
        if(this.hitTest(dropArea, overlap)){
            (this.target).classList.add("dropper");
        }else{
            (this.target).classList.remove("dropper");
        }},
    onDragEnd: function(){
        const bird = document.querySelector(".bird")
        if(this.target.classList.contains("dropper")){
            bird.classList.add("bird-animation")
            bird.addEventListener('animationend', () =>{
            setTimeout(()=>{TweenLite.to(this.target, 0.2,{
                x:0,
                y:0,
            })}, 1000)})
            bird.addEventListener("animationend", () =>{
                bird.classList.remove("bird-animation")
            })

        }else{
            TweenLite.to(this.target, 0.2,{
                x:0,
                y:0,
            })
        }
    }   
    }
)