/* 

TalaOS Digital Signage - Core  

Developed by: Walid Amriou
www.walidamriou.com

This work is licensed under:
Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

Last update: July 2020

*/

//let screen_size_width,screen_size_height,transitions_speed,images_type,images_number = config()

let screen_size_width=config_valures["screen_size_width_valure"]
let screen_size_height=config_valures["screen_size_height_valure"]
let transitions_speed=config_valures["transitions_speed_valure"]
let images_type=config_valures["images_type_valure"]
let image_numbero=config_valures["images_number_valure"]

// create images
for (let index = 1; index < image_numbero + 1; index++) {
    let img = document.createElement("img")
    img.src = "../talaos_ds_data/resources/" + index + "."+images_type
    img.className = "talaos_ds_image"
    img.style.cssText = "width:"+screen_size_width+"px;height:"+screen_size_height+"px"

    let screen = document.getElementById("screen");
    screen.appendChild(img)
}

//images loop function
var images_index = 0
talaos_ds_display_images_loop()

function talaos_ds_display_images_loop() {
    let talaos_ds_image = document.getElementsByClassName("talaos_ds_image")
    for (let index = 0; index < image_numbero; index++) {
        talaos_ds_image[index].style.display = "none"
    }
    images_index++
    if (images_index > image_numbero) {
        images_index = 1
    }
    talaos_ds_image[images_index - 1].style.display = "block"
    setTimeout(talaos_ds_display_images_loop, transitions_speed) // Change image every transitions_speed ms
}