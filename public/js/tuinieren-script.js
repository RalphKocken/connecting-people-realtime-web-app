// gebruik van socket
let client = io();

// selecteren van alle hekken
const wood = document.querySelectorAll(".wood");

// server side afhandeling van de emit
client.on('wood-colour', (woodColour) => {
  paintingWood(woodColour);
})

// server side afhandeling van aantal connected users
client.emit('active-users')

client.on('active-users', (count) => {
  console.log("users aantal: " + count)

  let clientslive = document.querySelector(".logit ");
  clientslive.innerHTML = count + " spelers";
});

const overlap = "50%";

const startButton = document.querySelector(".start-button");
const infoBox = document.querySelector(".info");

startButton.addEventListener("click", function () {
  infoBox.style.background = "transparent";
  infoBox.classList.add("info-dropper");
});

Draggable.create(".paintbrush", {
  bounds: "body",

  onDrag: function (e) {
    const dropArea = document.querySelector(".fence");
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },

  onDragEnd: function () {
    
      // client.emit('wood-colour', 'wood-colour-red');

    const planks = document.querySelectorAll(".plank");
    if (this.target.classList.contains("dropper")) {
      gsap.to(planks, {
        "--fence-progress": "0%",
        stagger: {
          amount: 4,
        },
        ease: "circ.out",
        onComplete: () => {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 0.2,
          });
        },
      });
    } else {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 0.2,
        delay: 1,
      });
    }
  },

});

// fillen van kleur op de svg
function paintingWood(woodColour) {
  wood.forEach((wood) => {
    wood.classList.add(woodColour);
  });
}

Draggable.create(".bird-seed", {
  bounds: "body",
  onDrag: function () {
    const bird = document.querySelector(".bird");
    const dropArea = document.querySelector(".birdhouse");
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },
  onDragEnd: function () {
    const bird = document.querySelector(".bird");
    if (this.target.classList.contains("dropper")) {
      bird.classList.add("bird-animation");
      bird.addEventListener("animationend", () => {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.2,
          delay: 1,
        });
        bird.classList.remove("bird-animation");
      });
    } else {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 0.2,
      });
    }
  },
});

Draggable.create(".bone", {
  bounds: "body",
  onDrag: function () {
    const dropArea = document.querySelector(".doghouse");
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },

  onDragEnd: function () {
    const dog = document.querySelector(".dog");
    if (this.target.classList.contains("dropper")) {
      dog.classList.add("dog-animation");
      dog.addEventListener("animationend", () => {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.2,
          delay: 1,
        });
        dog.classList.remove("dog-animation");
      });
    } else {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 0.2,
      });
    }
  },
});

Draggable.create(".lawn-mower", {
  bounds: "body",
  onDrag: function () {
    const dropArea = document.querySelector(".grass-container");
    const overlap = "20%";
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },

  onDragEnd: function () {
    const lawnMower = document.querySelector(".lawn-mower-big");
    const grass = document.querySelectorAll(".grass");
    if (this.target.classList.contains("dropper")) {
      lawnMower.classList.add("lawn-mower-animation");
      grass.forEach((grass) => {
        grass.classList.add("grass-animation");
      });
      lawnMower.addEventListener("animationend", () => {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.2,
          delay: 1,
        });
        lawnMower.classList.remove("lawn-mower-animation");
      });
    } else {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 0.2,
      });
    }
  },
});

Draggable.create(".watering-can", {
  bounds: "body",
  onDrag: function () {
    const dropArea = document.querySelector(".plantbed");
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },

  onDragEnd: function () {
    const flowers = document.querySelectorAll(".flower");
    if (this.target.classList.contains("dropper")) {
      // this.target.classList.add("tilt-can");
      // this.target.addEventListener("animationend", () => {
      flowers.forEach((flower) => {
        flower.classList.add("flower-animation");
        flower.addEventListener("animationend", () => {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 0.2,
            delay: 1,
          });
        });
      });
      // });
    } else {
      gsap.to(this.target, {
        x: 0,
        y: 0,
        duration: 0.2,
      });
    }
  },
});