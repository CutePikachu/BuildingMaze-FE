function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

// Event Listeners
addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Star(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
        x: randomIntFromRange(-4,4),
        y: 3
    }
    this.friction = 0.8
    this.gravity = 1
}

Star.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.shadowColor = '#fff'
    c.shadowBlur = 20
    c.fill()
    c.closePath()
    c.restore()
}

Star.prototype.update = function() {
    this.draw()

    //when ball hit the bottom of screen
    if (this.y + this.radius + this.velocity.y > canvas.height) {
        console.log("1")
        this.velocity.y = -this.velocity.y * this.friction
        this.shatter()
    } else {
        this.velocity.y += this.gravity
    }

    this.x +=this.velocity.x
    this.y += this.velocity.y
}

Star.prototype.shatter = function() {
    this.radius -= 3;
    for (let i = 0; i < 8; i++) {
        miniStars.push(new MiniStar(this.x, this.y, 2, 'red'))
    }
}

function MiniStar(x, y, radius, color) {
    Star.call(this, x, y, radius, color)
    this.velocity = {
        x: randomIntFromRange(-5, 5),
        y: randomIntFromRange(-15, 15)
    }
    this.friction = 0.8
    this.gravity = 0.1
    this.ttl = 100
    this.opacity = 1
}

MiniStar.prototype.draw = function() {
    c.save()
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
    c.shadowColor = '#fff'
    c.shadowBlur = 20
    c.fill()
    c.closePath()
    c.restore()
}

MiniStar.prototype.update = function() {
    this.draw()

    //when ball hit the bottom of screen
    if (this.y + this.radius + this.velocity.y > canvas.height) {
        this.velocity.y = -this.velocity.y * this.friction
    } else {
        this.velocity.y += this.gravity
    }
    this.y += this.velocity.y
    this.x += this.velocity.x
    this.ttl -= 1
    this.opacity -= 1 / this.ttl
}
// Implementation
const backgroundGredient = c.createLinearGradient(0, 0, 0, canvas.height)
backgroundGredient.addColorStop(0, '#55D9C0')
backgroundGredient.addColorStop(1, '#C7F6EC')

let stars
let miniStars
let ticker = 0
let randomSpawnRate = 75


// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = backgroundGredient
    c.fillRect(0, 0, canvas.width, canvas.height)
    stars.forEach((star, index) => {
        star.update()
        if (star.radius == 0) {
            stars.splice(index, 1)
        }
    })

    miniStars.forEach((miniStar, index) => {
        miniStar.update()
        if (miniStar.ttl == 0) {
            miniStars.splice(index, 1)
        }
    })

    ticker++;
    if (ticker % randomSpawnRate == 0) {
        const x = Math.random() * canvas.width
        stars.push(new Star(x, -100, 12, 'white'))
        randomSpawnRate = randomIntFromRange(75, 100)
    }
}

function init() {
    stars = []
    miniStars = []
}

init()
animate()
export { init as default };