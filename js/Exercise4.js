/*
* @Filename: Exercise4.js
* @Author:   Ben Sokol <Ben>
* @Email:    bensokol@ku.edu
* @Created:  September 24th, 2017 [1:21am]
* @Modified: September 24th, 2017 [2:07am]
* @Version:
*
* Description:
*
* Copyright (C) 2017 by Ben Sokol. All Rights Reserved.
*/


document.querySelector('.submit-button').addEventListener('click', () => {
  let bdr_r = parseInt(document.querySelector('.red-Border-value').value)
  let bdr_g = parseInt(document.querySelector('.green-Border-value').value)
  let bdr_b = parseInt(document.querySelector('.blue-Border-value').value)
  let bdr_w = parseInt(document.querySelector('.width-Border-value').value)

  let bkg_r = parseInt(document.querySelector('.red-Background-value').value)
  let bkg_g = parseInt(document.querySelector('.green-Background-value').value)
  let bkg_b = parseInt(document.querySelector('.blue-Background-value').value)

  if( (bdr_r < 0) || (bdr_r > 255) ) {
    alert('The number you entered for the red border color isn\'t valid.\nPlease try again.')
  }
  else if( (bdr_g < 0) || (bdr_g > 255) ) {
    alert('The number you entered for the green border color isn\'t valid.\nPlease try again.')
  }
  else if( (bdr_b < 0) || (bdr_b > 255) ) {
    alert('The number you entered for the blue border color isn\'t valid.\nPlease try again.')
  }
  else if( (bkg_r < 0) || (bkg_r > 255) ) {
    alert('The number you entered for the red background color isn\'t valid.\nPlease try again.')
  }
  else if( (bkg_g < 0) || (bkg_g > 255) ) {
    alert('The number you entered for the green background color isn\'t valid.\nPlease try again.')
  }
  else if( (bkg_b < 0) || (bkg_b > 255) ) {
    alert('The number you entered for the blue background color isn\'t valid.\nPlease try again.')
  }
  else if( (bdr_w < 0) ) {
    alert('The number you entered for the border width isn\'t valid.\nPlease try again.')
  }
  else {
    bdr_r = (Number.isNaN(bdr_r) ? 0 : bdr_r)
    bdr_g = (Number.isNaN(bdr_g) ? 0 : bdr_g)
    bdr_b = (Number.isNaN(bdr_b) ? 0 : bdr_b)
    bkg_r = (Number.isNaN(bkg_r) ? 0 : bkg_r)
    bkg_g = (Number.isNaN(bkg_g) ? 0 : bkg_g)
    bkg_b = (Number.isNaN(bkg_b) ? 0 : bkg_b)
    bdr_w = (Number.isNaN(bdr_w) ? 0 : bdr_w)
    document.querySelector('.js-color').style.backgroundColor = "rgb(" + bkg_r + "," + bkg_g + "," + bkg_b + ")"
    document.querySelector('.js-color').style.borderColor = "rgb(" + bdr_r + "," + bdr_g + "," + bdr_b + ")"
    document.querySelector('.js-color').style.borderWidth = bdr_w + "px"
    document.querySelector('.js-color').style.borderStyle = "solid"
  }
})

document.querySelector('.reset-button').addEventListener('click', () => {
  document.querySelector('.js-color').style.backgroundColor = ""
  document.querySelector('.js-color').style.borderColor = ""
  document.querySelector('.js-color').style.borderWidth = ""
  document.querySelector('.js-color').style.borderStyle = ""

  document.querySelector('.red-Border-value').value = ""
  document.querySelector('.green-Border-value').value = ""
  document.querySelector('.blue-Border-value').value = ""
  document.querySelector('.width-Border-value').value = ""

  document.querySelector('.red-Background-value').value = ""
  document.querySelector('.green-Background-value').value = ""
  document.querySelector('.blue-Background-value').value = ""
})
