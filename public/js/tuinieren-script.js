const overlap = "50%";

Draggable.create(".paintbrush", {
  bounds: "body",
  onDrag: function (e) {
    console.log(e);

    const dropArea = document.querySelector(".wood");
    if (this.hitTest(dropArea, overlap)) {
      this.target.classList.add("dropper");
    } else {
      this.target.classList.remove("dropper");
    }
  },
  onDragEnd: function () {
    const wood = document.querySelectorAll(".wood path");
    if (this.target.classList.contains("dropper")) {
      wood.forEach((wood) => {
        wood.style.fill = "blue";
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.2,
          delay: 1,
        });
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

        bird.addEventListener("animationend", () => {
          bird.classList.remove("bird-animation");
        });
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

        dog.addEventListener("animationend", () => {
          dog.classList.remove("dog-animation");
        });
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
