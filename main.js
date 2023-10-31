var vocabs = {
    yes: {
        partOfSpeech: "noun",
        definition: {
            1: "Used to give an affirmative response.",
            2: "Used as a response to someone addressing one or otherwise trying to attract one's attention."
        }
    }, 
    panacea: {
        partOfSpeech: "noun",
        definiton: "An answer or solution for all problems or difficulties"
    },
    concatenation: {
        partOfSpeech: "verb",
        definition: {
            1: "Cut (something) using a saw.",
            2: "Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
        }
    },
    found: {
        partOfSpeech: "adjective",
        definition: {
            1: "Having been discovered by chance or unexpectedly.",
            2: "(of a ship) Equipped; Supplied."
        }
    }, 
    crane: {
        partOfSpeech: "verb",
        definition: {
            1: "Stretch out one's body or neck in order to see something.",
            2: "Move (a heavy object) with a crane."
        }
    },
    minute: {
        partOfSpeech: "noun",
        definition: {
            1: "A period of time equal to sixty seconds or a sixtieth of an hour.",
            2: "A sixtieth of a degree of angular measurement (symbol: ʹ)"
        }
    },
    grotesque: {
        partOfSpeech: "adjective",
        definition: "Comically or repulsively ugly or distorted."
    },
    label: {
        partOfSpeech: "noun",
        definition: "A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."
    },
    debacle: {
        partOfSpeech: "noun",
        definition: "A sudden and ignominious failure; a fiasco."
    }
}
const enterButton = document.getElementById("button");
const definitionContainer = document.getElementById("definition");

function vocabPartOfSpeechAndDefinition(){
    const inputVocab = document.getElementById("input").value.toLowerCase();

    if(inputVocab == ""){
        alert("You have to enter your vocabulary");
    }
    else if(vocabs.hasOwnProperty(inputVocab)){
        const container = document.createElement("div");
        const pPartOfSpeech = document.createElement("p");
        const pDefinition = document.createElement("p");

        definitionContainer.appendChild(container);
        container.appendChild(pPartOfSpeech);
        container.appendChild(pDefinition);
        
        pPartOfSpeech.innerText= "Part of Speech: " + inputVocab.partOfSpeech;
        pDefinition.innerText=  "Definition: "  + inputVocab.definition;
    }
    else{
        alert("The word is not in this dictionary");
    }
    document.getElementById("input").value = "";
};
enterButton.addEventListener("click", vocabPartOfSpeechAndDefinition);

// enterButton.addEventListener("keypress", function(event){
//     if(event.key === "Enter"){
//         event.preventDefault();
//         enterButton.click();
//     }
// });

