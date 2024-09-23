import { users } from "./js/users.js"

function writeDom(user) {
	const container = document.querySelector(".container")
	const article = document.createElement("article")
	article.classList.add("card")

	const cardImageDiv = document.createElement("div")
	cardImageDiv.classList.add("card-image")

	const mainImg = new Image()
	mainImg.src = user.gender === "Male" ? "./assets/02.jpg" : "./assets/01.jpg"
	mainImg.setAttribute("alt", user.userName)
	cardImageDiv.appendChild(mainImg)

	const spanName = document.createElement("span")
	spanName.classList.add("card-title")
	spanName.textContent = user.userName
	cardImageDiv.appendChild(spanName)
	article.appendChild(cardImageDiv)

	const cardContent = document.createElement("div")
	cardContent.classList.add("card-content")

	const ulList = document.createElement("ul")
	ulList.classList.add("list-group")

	for (let index = 0; index < 4; index++) {
		const li = document.createElement("li")
		li.classList.add("list-group-item")
		if (index === 0) {
			li.textContent = `Name: ${user.userName} ${user.lastName}`
		} else if (index === 1) {
			li.textContent = `Age: ${user.age}`
		} else if (index === 2) {
			li.textContent = `Address:  ${user.address.number} ${user.address.street}`
			const iconImg = new Image()
			iconImg.src = user.address.house
				? "./assets/house.svg"
				: "./assets/apart.svg"
			li.appendChild(iconImg)
		} else {
			li.textContent = `Role: ${user.role}`
		}
		ulList.appendChild(li)
	}
	cardContent.appendChild(ulList)
	article.appendChild(cardContent)

	container.appendChild(article)
}

function init() {

	users.forEach((user) => {
		
		writeDom(user)
	})
}

init()
console.log(123)
