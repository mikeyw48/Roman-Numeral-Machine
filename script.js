const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const letters = "MCMDCDCXCLXLXIXVIVI"


let interval = null;

document.querySelector("h3").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 19)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 40);
}


const checkUserInput = () => {
    if (numberInput.value === "") {
        outputDiv.innerHTML = "Please enter a valid number";
    } else if (numberInput.value < 0) {
        outputDiv.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (numberInput.value > 3999) {
        outputDiv.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        let inputNumber = parseInt(numberInput.value);
        let romanNumeral = convertToRoman(inputNumber);
        outputDiv.innerHTML = romanNumeral;
        numberInput.value = "";
    }
}


convertBtn.addEventListener("click", () => {
    console.log(numberInput.value)
    checkUserInput();
    outputDiv.style.display = "block";
})

function convertToRoman(num) {
    let romanNumeral = "";
  
    //Thousands Containter
    let thousands = Math.floor(num / 1000);
    //console.log(thousands)
    let romanThousands = "M".repeat(thousands);
    //console.log(romanThousands)
    let thousandsRemainder = num %= 1000;
    //console.log(thousandsRemainder)
  
    //900s Container 
    let nineHundreds = Math.floor(thousandsRemainder/900);
    let romanNineHundreds = "CM".repeat(nineHundreds);
    let nineHundredsRemainder = num %= 900;
    //console.log(nineHundredsRemainder);
  
    // 500 Container
    let fiveHundreds = Math.floor(nineHundredsRemainder / 500);
    let romanFiveHundreds = "D".repeat(fiveHundreds);
    let fiveHundredsRemainder = num %= 500;
  
    //console.log(fiveHundredsRemainder)
  
    // 400 Container 
    let fourHundreds = Math.floor(fiveHundredsRemainder / 400);
    let romanFourHundreds = "CD".repeat(fourHundreds);
    let fourHundredsRemainder = num %= 400;
  
    //console.log(fourHundredsRemainder)
  
    // 100s Container
  
    let oneHundreds = Math.floor(fourHundredsRemainder / 100);
    let romanOneHundreds = "C".repeat(oneHundreds);
    let oneHundredsRemainder = num %= 100;
  
    //console.log(oneHundredsRemainder);
  
    // 90S Container
  
    let nineTy = Math.floor(oneHundredsRemainder / 90);
    let romanNinety = "XC".repeat(nineTy);
    let ninetyRemainder = num %= 90;
  
    //console.log(ninetyRemainder)
  
    // 50 Container
  
    let fifTy = Math.floor(ninetyRemainder / 50);
    let romanFifty = "L".repeat(fifTy);
    let fiftyRemainder = num %= 50;
  
    //console.log(fiftyRemainder)
  
    // 40s Container
    let forty = Math.floor(fiftyRemainder / 40);
    let romanForty = "XL".repeat(forty);
    let fortyRemainder = num %= 40;
  
    //console.log(fortyRemainder)
  
    //10s Container
    let tens = Math.floor(fortyRemainder / 10);
    let romanTens = "X".repeat(tens);
    let tensRemainder = num %= 10;
  
    //console.log(tensRemainder)
  
    //9s Container
    let nines = Math.floor(tensRemainder / 9);
    let romanNines = "IX".repeat(nines);
    let ninesRemainder = num %= 9;
  
    //console.log(ninesRemainder)
  
    //Fives Container 
    let fives = Math.floor(ninesRemainder / 5);
    let romanFives = "V".repeat(fives);
    let fivesRemainder = num %= 5;
  
    //console.log(fivesRemainder)
  
    // Fours Container
    let fours = Math.floor(fivesRemainder / 4);
    let romanFours = "IV".repeat(fours);
    let foursRemainder = num %= 4;
  
    //console.log(foursRemainder)
  
  
    //Ones Container
    let ones = Math.floor(foursRemainder / 1);
    let romanOnes = "I".repeat(ones);
  
  
    romanNumeral += romanThousands + romanNineHundreds + romanFiveHundreds + romanFourHundreds + romanOneHundreds + romanNinety + romanFifty + romanForty + romanTens + romanNines + romanFives + romanFours + romanOnes;
  
  
    //console.log(romanNumeral)

    return romanNumeral
  
  }
  