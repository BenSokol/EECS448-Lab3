/*
* @Filename: Exercise1.js
* @Author:   Ben Sokol <Ben>
* @Email:    bensokol@ku.edu
* @Created:  September 23rd, 2017 [9:36pm]
* @Modified: September 24th, 2017 [12:03am]
*
* Copyright (C) 2017 by Ben Sokol. All Rights Reserved.
*/


/*
 * Checks the length of the input field, Displays alert if not 8 characters
 * Checks if fields match, if they dont, return error
 */
document.querySelector('.submit-button').addEventListener('click', () => {
  let password_1 = document.querySelector('.password-1')
  let password_2 = document.querySelector('.password-2')
  let lengthBool = (password_1.value.length >= 8) && (password_2.value.length >= 8)
  let sameBool = (password_1.value == password_2.value)
  if(password_1.value.length == 0) {
    alert('You didn\'t enter a password. Please try again')
  }
  else if(!lengthBool && !sameBool) {
    alert('the passwords are not at least 8 characters long and\nthe passwords entered don\'t match')
  }
  else if(!lengthBool) {
    alert('the passwords are not at least 8 characters long')
  }
  else if(!sameBool) {
    alert('The passwords entered don\'t match')
  }
  else {
    alert('Congratulations, your passwords match and are the correct length !')
  }
})
