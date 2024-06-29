// Function to get formatted current date
function getFormattedDate() {
  const date = new Date() // Get current date
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options).toUpperCase()
}

// Display the formatted date
document.getElementById('date').innerText = getFormattedDate()

//

//
//
//
//

// nav
//
//
var prevScrollpos = window.scrollY
window.onscroll = function () {
  var currentScrollPos = window.scrollY
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav').style.top = '0'
  } else {
    document.getElementById('nav').style.top = '-95px'
  }
  prevScrollpos = currentScrollPos
}
//
//
//
//
//
//

// nav hover js property
const pradeshPress = document.querySelector('.pradesh-press')
const pradeshLink = document.querySelector('.pradesh-link')

// Add event listeners
pradeshPress.addEventListener('mouseover', () => {
  pradeshPress.style.display = 'block'
})

pradeshPress.addEventListener('mouseout', () => {
  pradeshPress.style.display = 'none'
})

pradeshLink.addEventListener('mouseover', () => {
  pradeshPress.style.display = 'block'
})

pradeshLink.addEventListener('mouseout', () => {
  pradeshPress.style.display = 'none'
})
