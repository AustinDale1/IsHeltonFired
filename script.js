const el = document.getElementById('rot')
let deg = 0

function rotate() {
  deg = (deg + 1) % 360
  el.style.transform = `rotate(${deg}deg)`
  requestAnimationFrame(rotate)
}

rotate()


// date they last had a good one
const badSince = new Date('2015-12-11')

// get today's date
const now = new Date()

// compute days diff (ms → days)
const diffTime = now - badSince
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

// display it
document.getElementById('days').textContent = diffDays