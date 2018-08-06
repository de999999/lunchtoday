// document.addEventListener('DOMContentLoaded', function (e) {     console.log("IT'S LOADEDDD")
//     console.log("hey brianna. I am the DOM I have listened for all things loaded and I am telling you I am loaded. ITS LOADEDDD");
    
//     var image = document.getElementById('pizza');
   
//  image.addEventListener('click', function imageClick (e) {
//     console.log("I just clicked on the sandwich image.")
//     console.log(image.src)
//     image.src = "file:///C:/Users/GWC21/Documents/whack/pizza2other.jpg"

 
//     if (image.src === "file:///C:/Users/GWC21/Documents/whack/lunch.jpg") {
//         image.src = "file:///C:/Users/GWC21/Documents/whack/pizza2other.jpg"
//   } else if (image.src === "file:///C:/Users/GWC21/Documents/whack/pizza2other.jpg" {
//         image.src = "file:///C:/Users/GWC21/Documents/whack/lunch.jpg"
// }

// })


// })

document.addEventListener("DOMContentLoaded", function (event) {
    var sand1 = document.getElementById('pizza');
   
    sand1.addEventListener('click', function (e) {
        // sand1.src = "./images/lunch.jpg"
        console.log(sand1.src)
        if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/lunch.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/pizza2other.jpg";
        } else if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/pizza2other.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/lunch.jpg";
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var sand1 = document.getElementById('Pasta2');
   
    sand1.addEventListener('click', function (e) {
        // sand1.src = "./images/morefood.jpg"
        console.log(sand1.src)
        if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/morefood.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/pasta2.jpg";
        } else if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/pasta2.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/morefood.jpg";
        }
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    var sand1 = document.getElementById('sushi');
   
    sand1.addEventListener('click', function (e) {
        // sand1.src = "./images/wens.jpg"
        console.log(sand1.src)
        if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/sushi2.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/moresushi.jpg";
        } else if (sand1.src === "file:///C:/Users/GWC21/Documents/whack/moresushi.jpg") {
            sand1.src = "file:///C:/Users/GWC21/Documents/whack/sushi2.jpg";
        }
    });
});