let userName = prompt("What is your name, adventurer?")

alert(`Oh, hello ${userName}!`)

const startGame = () => {
  let userPlay = confirm("May luck be upon ya")
  playGame(userPlay)
}
const playGame = (choice) => {
  if (choice) {
    alert("Let's begin")
    choiceOne()
  } else {
    alert("How unfortunate, come back when you feel up to the task")
  }
}
choiceOne()

choiceTwo()

choiceThree()

choiceFour()

numberChoice ()
function choiceOne() {
    let firstChoice = prompt("You enter a small mining city in Yalora, a kingdom graced upon many a kind. The virtuous and proud, HIGH ELVES; the cunning and avant-garde, TIEFLINGS; and the innovative and reclusive DWARVES. Forgive me young adventurer, for my eyes are old, what race do you hail from?")

    if (firstChoice === "HIGH ELVES") {
        alert("Im pleasantly surprised a high elf has decided to get their hands dirty, for once.")
        
    } else if (firstChoice === "TIEFLINGS") {
        alert("I should have known, you bunch are always looking for trouble.")
        
    } else if (firstChoice === "DWARVES") {
        alert("Ah, the true definition of mighty and tiny.")
        
    } else {
        alert("Whatever you are, you're not very clever. Check your spelling and capitalization would ya?")
        choiceOne()
    }
}
    function choiceTwo() {
        let secondChoice = prompt("There's been some trouble deep in the caves underneath the city, the people have rumored that orcs have overrun the mines. Nasty beasts.I'm commissioning you to enter deep into the caves and locate my missing chest. It's very important that you do not open the chest and simply return it back to me. YES. NO. CHEST?")
        if (secondChoice === "YES") {
            alert("I eat orcs for breakfast!")

        } else if (secondChoice === "NO") {
            alert("Scared of a few orcs aint ya? END")
            prompt("play again?")
            startGame()
            
        } else if (secondChoice === "CHEST?") {
            alert("Mind ya business and bring me that chest!")

        } else {
            alert("Cat got your tongue?")
            choiceTwo()
        }
    }
    function choiceThree() {
        let thirdChoice = prompt("After receiving the quest, you make your way down to the outskirts of the city and found an entrance to one of the many mines. Sure enough, littered across the entry way where hundreds of Orcs. We can try to SNEAK past them, we could FIGHT them or we can TALK to them.")
        if (thirdChoice === "SNEAK") {
            alert("You really thought you could sneak past all those orcs? You should know... while they are stupid, their sense of smell is impeccable. You end up trying to sneak by the orc closest to the entrance where he noticed you and grabbed you by your scruf. Looks like your an orc snack. END")
            startGame()

        } else if (thirdChoice === "FIGHT") {
             alert("You truly are a mighty warrior, the moment you stepped out with your sword the orcs shuddered with fear, hearing of your mainy conquests across Yalora. What a fine warrior you are.")
        
        } else if (thirdChoice === "TALK") {
            alert("You walk up to the hundred of orcs and begin waving your hands and trying to communicate with them. The orcs look amongst eachother confused. You begin to stomp and wave your hands around like you had seen some of them do earlier. The orcs cheer and move aside. Im surprised this even worked.")
        } else {
            alert("This is no time for indecision!!")
            choiceThree()
        }
    }

    function choiceFour() {
        let fourthChoice = prompt("You made your way into the mines and begin searching for the chest. You come across three different paths in the cave. The LEFT is dark and quiet with the occasional scream. The MIDDLE had glitter and classical music playing. The RIGHT has heavy death metal but smelled like pumpkin spice. Which way do you go?")
        if (fourthChoice === "LEFT") {
            alert("You chose left so you walked down the dark route and could hear the screams get louder and louder. As you approach you come across a French Bulldog sitting there perplexed. Before you could do anything the french bulldog transformed into a giant serpent and ate you. END")
            numberChoice()

        } else if (fourthChoice === "MIDDLE") {
            alert("You walk down the corridor and get stuck in an endless loop of RuPaul's drag race. Yay? END")
            numberChoice()

        } else if(fourthChoice === "RIGHT") {
            alert("You walk down this path and to your dissapointment there were no pumpkin spice lattes but a chest END")
            numberChoice()

        } else {
            alert("decision fatigue?")
            choiceFour()
        }

       
    }
    
   
    let numberChoice = prompt("How are you feeling about this game on a scale of 1-5? 5 being the best ${ } ");

    switch (numberChoice) {
      case '1':
        alert("That's unfortunate, maybe you should choose a different career path")
        break;
  
      case '2':
        alert("I could say I feel the same way about you");
        break;
  
      case '3':
        alert("Not surprised. You've always been average");
        break;
  
      case '4':
        alert("Why didn't you choose 5 instead?");
        break;
  
      case '5':
        alert("Youre having a little too much fun.");
        break;
        
      }
     
    startGame()
    
