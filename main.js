// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartIcons = document.querySelectorAll("span.like-glyph")
for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click" , () => {
    mimicServerCall()
    .then(() => {
      if (heartIcon.innerHTML === EMPTY_HEART) {
        heartIcon.innerHTML = FULL_HEART;
        heartIcon.classList.add("activated-heart")
      } else {
        heartIcon.innerHTML = EMPTY_HEART;
        heartIcon.classList.remove("activated-heart")
      }
    })
    .catch((error) => {
      const errorMessage = document.querySelector("div#modal")
      errorMessage.classList.remove("hidden")
      setTimeout(() => {
        errorMessage.classList.add("hidden")
      }, 3000)
      errorMessage.innerHTML = error;
    })
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
