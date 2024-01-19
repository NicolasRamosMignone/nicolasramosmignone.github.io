// document.addEventListener("mousemove", function(e) {
// 	requestAnimationFrame(() =>{
// 		const x = e.pageX - e.target.offsetLeft;
// 		const y = e.pageY - e.target.offsetTop;

// 		e.target.style.setProperty('--x', `${ x }px`);
// 		e.target.style.setProperty('--y', `${ y }px`);
// 	});
// });

// const blob = document.getElementById("blob");

// window.onpointermove = event => {
//   const { clientX, clientY } = event;

//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }

// let blob = document.getElementById("blob");

// function isTouchDevice(){
// 	try{
// 		document.createEvent("TouchEvent");
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// }

// const move = (e) =>{
// 	try{
// 		var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
// 		var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
// 	} catch(e) {}
// 	blob.style.left = x + "px";
// 	blob.style.top = y + "px";
// }

// document.addEventListener("mousemove", (e) => {
// 	move(e);
// });

// document.addEventListener("touchmove", (e) => {
// 	move(e);
// });

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

if (isTouchDevice())
  document.querySelector(".sclera").style.backgroundColor = "#D2B48C";

const getAngle = (transformOrigin, cursor, orthogonal) => {
  let angle =
    Math.atan2(cursor.y - orthogonal.y, cursor.x - orthogonal.x) -
    Math.atan2(
      transformOrigin.y - orthogonal.y,
      transformOrigin.x - orthogonal.x
    );

  if (angle > Math.PI) angle -= 2 * Math.PI;
  else if (angle <= -Math.PI) angle += 2 * Math.PI;

  return (angle * 180) / Math.PI;
};

window.onmousemove = (event) => {
  if (!isTouchDevice()) {
    orthogonalRect = document.getElementById("sclera").getBoundingClientRect();

    const orthogonal = {
      x: orthogonalRect.left + orthogonalRect.width / 2,
      y: orthogonalRect.top + orthogonalRect.height / 2,
    };

    const transformOrigin = {
      x: orthogonalRect.left + orthogonalRect.width / 2,
      y: orthogonalRect.top,
    };

    const cursor = {
      x: event.clientX,
      y: event.clientY,
    };

    const angle = getAngle(transformOrigin, cursor, orthogonal);

    document.getElementById("cornea").style.transform = `rotate(${angle}deg)`;
  }
};

const a = document.querySelectorAll("a");
const button = document.querySelectorAll("button");
const iris = document.querySelector(".iris");
const eyelashes = document.querySelector(".eyelashes");

a.forEach((el) =>
  el.addEventListener("mouseover", () => {
    if (!isTouchDevice()) {
      // document.getElementById('sclera').style.backgroundColor = "#d2b48c";
      eyelashes.style.height = "8px";
      iris.style.width = "75%";
      iris.style.height = "70%";
    }
  })
);

a.forEach((el) =>
  el.addEventListener("mouseout", () => {
    if (!isTouchDevice()) {
      // document.getElementById('sclera').style.backgroundColor = "#fff";
      eyelashes.style.height = "0";
      iris.style.width = "60%";
      iris.style.height = "60%";
    }
  })
);

button.forEach((el) =>
  el.addEventListener("mouseover", () => {
    if (!isTouchDevice()) {
      // document.getElementById('sclera').style.backgroundColor = "#d2b48c";
      eyelashes.style.height = "8px";
      iris.style.width = "75%";
      iris.style.height = "70%";
    }
  })
);

button.forEach((el) =>
  el.addEventListener("mouseout", () => {
    if (!isTouchDevice()) {
      // document.getElementById('sclera').style.backgroundColor = "#fff";
      eyelashes.style.height = "0";
      iris.style.width = "60%";
      iris.style.height = "60%";
    }
  })
);
