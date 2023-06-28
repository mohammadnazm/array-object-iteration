// Task 1
var dairy = ["cheese", "sour cream", "milk", "yogurt", "ice cream", "milkshake"]

function logDairy() {
  for (elements of dairy) {
    console.log(elements)
  }
}

logDairy()

// Task 2
const animal = {
  canJump: true,
}

const bird = Object.create(animal)

bird.canFly = true

bird.hasFeathers = true

function birdCan() {
  for (const [key, value] of Object.entries(bird)) {
    console.log(key + ": " + value)
  }
}

birdCan()
// Task 3
function animalCan() {
  for (key in bird) {
    console.log(key + ": " + bird[key])
  }
}

animalCan()
