/*
* @Filename: Exercise2.js
* @Author:   Ben Sokol <Ben>
* @Email:    bensokol@ku.edu
* @Created:  September 23rd, 2017 [11:20pm]
* @Modified: September 24th, 2017 [12:02am]
*
* Copyright (C) 2017 by Ben Sokol. All Rights Reserved.
*/


let currentImgIndex = 0
let imageArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]


document.querySelector('.prev-button').addEventListener('click', () => {
  currentImgIndex = ((currentImgIndex == 0) ? 4 : currentImgIndex - 1)
  document.querySelector('.img-slideshow').src = '../img/Exercise2/' + imageArray[currentImgIndex]
})

document.querySelector('.next-button').addEventListener('click', () => {
  currentImgIndex = ((currentImgIndex == 4) ? 0 : currentImgIndex + 1)
  document.querySelector('.img-slideshow').src = '../img/Exercise2/' + imageArray[currentImgIndex]
})
