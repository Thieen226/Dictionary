//creating object contains all of the vocabs
//then a specific word will be an object contain its part of speech and definition
//then add \n into the array of definition to add a new line of the defintion of that word 
var vocabs = {
    yes: {
        partOfSpeech: "noun",
        definition: [
             "\n 1. Used to give an affirmative response",
             "\n 2. Used as a response to someone addressing one or otherwise trying to attract one's attention."
    ]
    }, 
    panacea: {
        partOfSpeech: "noun",
        definiton: ["\n 1. An answer or solution for all problems or difficulties"]
    },
    concatenation: {
        partOfSpeech: "verb",
        definition: [
            "\n 1. Cut (something) using a saw",
            "\n 2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."
        ]
    },
    found: {
        partOfSpeech: "adjective",
        definition: [
            "\n 1. Having been discovered by chance or unexpectedly",
            "\n 2. (of a ship) Equipped; Supplied."
        ]
    }, 
    crane: {
        partOfSpeech: "verb",
        definition: [
            "\n 1. Stretch out one's body or neck in order to see something",
            "\n 2. Move (a heavy object) with a crane."
        ]
    },
    minute: {
        partOfSpeech: "noun",
        definition: [
            "\n 1. A period of time equal to sixty seconds or a sixtieth of an hour",
            "\n 2. A sixtieth of a degree of angular measurement (symbol: ʹ)"
        ]
    },
    grotesque: {
        partOfSpeech: "adjective",
        definition: ["\n 1. Comically or repulsively ugly or distorted."]
    },
    label: {
        partOfSpeech: "noun",
        definition: ["\n 1. A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    debacle: {
        partOfSpeech: "noun",
        definition: ["\n 1. A sudden and ignominious failure; a fiasco."]
    }
}
const enterButton = document.getElementById("button");
const definitionContainer = document.getElementById("definition");

function vocabPartOfSpeechAndDefinition(){
    //using toLowerCase so that either lower or upper case words will count
    const inputVocab = document.getElementById("input").value.toLowerCase();

    if(inputVocab == ""){
        alert("You have to enter your vocabulary");
    }
    //if the input is one of the words in the vocab, it will do the following
    else if(vocabs.hasOwnProperty(inputVocab)){
        //creating new elements to store the words 
        const container = document.createElement("div");
        const pPartOfSpeech = document.createElement("p");
        const pDefinition = document.createElement("p");

        //putting child elements into parent elements
        definitionContainer.appendChild(container);
        container.appendChild(pPartOfSpeech);
        container.appendChild(pDefinition);
        
        //changing the p elements based on the word the user put into the input
        //then it will show Part of Speech, and pull the desired word from the vocabs object and its partOfSpeech
        //for the definition, it will pull the definition of the desired word from the vocabs object
        pPartOfSpeech.innerText= "Part of speech: " + vocabs[inputVocab].partOfSpeech;
        pDefinition.innerText=  "Definition: "  + vocabs[inputVocab].definition;



        //creating new class for each element
        container.classList.add("container");
        pPartOfSpeech.classList.add("pPartOfSpeech");
        pDefinition.classList.add("pDefinition");

        //reset the page with new word's part of speech and definition after putting a new word in the input and enter it
        document.getElementById("button").addEventListener("click", () =>{
            definitionContainer.removeChild(container);
        });

    }
    else{
        //creating new elements to show that the user's input is not in the dictionary
        const inputVocab = document.getElementById("input").value;
        const container = document.createElement("div");
        const pElement = document.createElement("p");

        //putting child elements into parent elements
        definitionContainer.appendChild(container);
        container.appendChild(pElement);
        
        pElement.innerText = [inputVocab] + " is not in this dictionary";

        pElement.classList.add("pElement");
        
        //reset the page with a new word after it is getting put in the input and the button is clicked again
        document.getElementById("button").addEventListener("click", () =>{
            definitionContainer.removeChild(container);
        });
    }
    //reset input
    document.getElementById("input").value = "";
 
};
//if the button is clicked, it will activate the function vocabPartOfSpeechAndDefiniton
enterButton.addEventListener("click", vocabPartOfSpeechAndDefinition);

//activate the button by clicking the enter on the keyboard
document.getElementById("input").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("button").click();
    }
});

