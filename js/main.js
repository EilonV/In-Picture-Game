var gQuests = []
var gCurrQuestIdx = 1


function initGame() {
    var showButton = document.getElementsByClassName('restart')
    gCurrQuestIdx = 1
    showButton[0].style.display = 'none'
    createQuests()
    buildQuest()
}

function createQuests() {

    gQuests[0] = { id: 1, opts: ['The dog can ride the boy!', 'That boy can ride the dog!'], correctOptIndex: 1 }
    gQuests[1] = { id: 2, opts: ['The banana is in a bubble', 'The banana is in a dribble'], correctOptIndex: 0 }
    gQuests[2] = { id: 3, opts: ['The bog is winking', 'The dog is winking'], correctOptIndex: 1 }
}

function buildQuest() {

    var changeButtons = document.getElementsByClassName('button')

    //assign the question text to each button
    changeButtons[0].innerText = gQuests[gCurrQuestIdx - 1].opts[0]
    changeButtons[1].innerText = gQuests[gCurrQuestIdx - 1].opts[1]

    //changes the picture of the question
    document.getElementById('pic').src = 'img/' + gCurrQuestIdx + '.png'
}

function checkAnswer(optIdx) {

    //shows the hidden restart button upon winning
    var showButton = document.getElementsByClassName('restart')

    if (gCurrQuestIdx === 3) {
        alert('Victory! 🏆')
        console.log(document.getElementsByClassName('restart'))
        showButton[0].style.display = 'block'
    }

    //checks if the button click matches the correct answer
    if (optIdx == gQuests[gCurrQuestIdx - 1].correctOptIndex && gCurrQuestIdx !== 3) {
        gCurrQuestIdx++
        buildQuest()
    }
} 
