const msg = document.getElementById("msg")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const dialog = document.getElementById("message-dialog")
const modalBtn = document.getElementById("modal-btn")
const finalMessage = document.querySelector(".result-message")
let startTime, endTime

const sentences = [
    "After coating myself in vegetable oil I found my success rate skyrocketed.",
    "There is no better feeling than staring at a wall with closed eyes.",
    "As you consider all the possible ways to improve yourself and the world, you notice John Travolta seems fairly unhappy.",
    "He walked into the basement with the horror movie from the night before playing in his head.",
    "Baby wipes are made of chocolate stardust.",
    "Pair your designer cowboy hat with scuba gear for a memorable occasion.",
    "It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
    "Best friends are like old tomatoes and shoelaces.",
    "Strawberries must be the one food that doesn't go well with this brand of paint."
]

const wordCounter = (str) => {
    let len = 0
    if(str)
        len = str.split(' ').length
    return len
}
const playGames = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length)
    msg.innerText = sentences[randomNumber]
    let date = new Date()
    startTime = date.getTime()
    btn.innerText = "DONE"
}
const endPlay = () => {
    let date = new Date()
    endTime = date.getTime()
    let totalTime = ((endTime - startTime) / 1000)
    let words = wordCounter(input.value)
    let speed = Math.floor((words / totalTime) * 60)
    let displayResult = `You typed at the speed of ${speed} wpm`
    displayResult += compareWords(msg.innerText, input.value)
    finalMessage.innerText = displayResult
    msg.innerText = ""
    input.value = ""
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(' ')
    let words2 = str2.split(' ')
    let count  = 0
    words1.forEach((item, index) => {
        if (item == words2[index])
            count++
    })
    let errorWords = words1.length - count
    return (`, ${count} correct out of ${words1.length} words and there were ${errorWords} errors.`)
}

btn.addEventListener("click", function () {
    if(this.innerText == 'START') {
        input.disabled = false
        playGames()
    } else if (this.innerText = "DONE") {
        input.disabled = true
        this.innerText = "START"
        dialog.showModal()
        endPlay()
    }
})

modalBtn.addEventListener("click", function () {
    dialog.close()
})
