function getRandomPosition(rectangle, size) {
	const edge = Math.floor(Math.random() * 4)
	const max_x = rectangle.clientWidth - size
	const max_y = rectangle.clientHeight - size
	const offset = size * 2

	switch (edge) {
		case 0:
			return {
				x: Math.floor(Math.random() * max_x),
				y: -offset,
			}
		case 1:
			return {
				x: rectangle.clientWidth + offset,
				y: Math.floor(Math.random() * max_y),
			}
		case 2:
			return {
				x: Math.floor(Math.random() * max_x),
				y: rectangle.clientHeight + offset,
			}
		case 3:
		default:
			return {
				x: -offset,
				y: Math.floor(Math.random() * max_y),
			}
	}
}

function createRandomCircle(rectangleElement) {
	const rectangle = rectangleElement
	const circle = document.createElement('div')
	const size = Math.floor(Math.random() * 100) + 10
	const position = getRandomPosition(rectangle, size)
	const duration = 5 + Math.random() * 5
	const finalPosition = getRandomPosition(rectangle, size)

	circle.style.width = `${size}px`
	circle.style.height = `${size}px`
	circle.style.left = `${position.x}px`
	circle.style.top = `${position.y}px`
	circle.style.backgroundColor = '#007cd9'
	circle.style.position = 'absolute'
	circle.style.borderRadius = '50%'
	circle.style.filter = 'blur(70px)'
	circle.style.zIndex = '-1'

	const animation = circle.animate(
		[
			{ left: `${position.x}px`, top: `${position.y}px` },
			{ left: `${finalPosition.x}px`, top: `${finalPosition.y}px` },
		],
		{
			duration: duration * 1000,
			iterations: 1,
			easing: 'linear',
		}
	)

	animation.onfinish = () => {
		circle.remove()
		createRandomCircle(rectangleElement)
	}

	rectangle.appendChild(circle)
}

function createRandomCircles(rectangleElement) {
	const numberOfCircles = Math.floor(Math.random() * 10) + 12

	for (let i = 0; i < numberOfCircles; i++) {
		createRandomCircle(rectangleElement)
	}
}

const rectangleElement = document.querySelector('.rectangle')
const userAvatar = document.getElementById('avatar')
const rectangleElementTwo = document.querySelector('.rectangle-two')

userAvatar.addEventListener('click', function () {
	console.log('uea')
})

createRandomCircles(rectangleElement)

document.addEventListener('DOMContentLoaded', function () {
	const videoFiles = ['images/video.webm']

	const randomIndex = Math.floor(Math.random() * videoFiles.length)
	const randomVideoFile = videoFiles[randomIndex]

	const videoElement = document.querySelector('.background-video video')
	const sourceElement = document.createElement('source')

	sourceElement.setAttribute('src', randomVideoFile)
	sourceElement.setAttribute('type', 'video/mp4')

	videoElement.appendChild(sourceElement)
	videoElement.load()
})

const expandButton = document.getElementById('expand-button')
const arrow = expandButton.querySelector('.arrow')
const container = document.querySelector('.container')
const rectangleRight = document.querySelector('.rectangle-right')
const rectangleButton = document.querySelector('.rectangle-button')

let expanded = false

expandButton.addEventListener('click', () => {
	expanded = !expanded
	arrow.classList.toggle('rotate')
	container.classList.toggle('move-left')
	rectangleButton.classList.toggle('move-right')
})
