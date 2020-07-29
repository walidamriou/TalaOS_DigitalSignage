/* 

TalaOS Digital Signage - Core  

Developed by: Walid Amriou
www.walidamriou.com

This work is licensed under:
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

Last update: July 2020

*/

let transitions_speed = 2000 //ms
let image_number = 9

// create images
for (let index = 1; index < image_number + 1; index++) {
    let img = document.createElement("img")
    img.src = "../talaos_ds_data/resources/" + index + ".png"
    img.className = "talaos_ds_image"
    img.style.cssText = 'width:100%;height:100%'

    let screen = document.getElementById("screen");
    screen.appendChild(img)
}

//images loop function
var images_index = 0
talaos_ds_display_images_loop()

function talaos_ds_display_images_loop() {
    let talaos_ds_image = document.getElementsByClassName("talaos_ds_image")
    for (let index = 0; index < image_number; index++) {
        talaos_ds_image[index].style.display = "none"
    }
    images_index++
    if (images_index > image_number) {
        images_index = 1
    }
    talaos_ds_image[images_index - 1].style.display = "block"
    setTimeout(talaos_ds_display_images_loop, transitions_speed) // Change image every transitions_speed ms
}