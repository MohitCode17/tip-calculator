const billAmount = document.getElementById('billAmountInput');
const tipPercentage = document.getElementById('tipInput');
const totalPeople = document.getElementById('totalNumberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

// Get number of people from total number of People div
let numberOfPeople = Number(totalPeople.innerText);


// ** Calculate the total bill per person **
const calculateBill = () =>{
    let bill = Number(billAmount.value);
    let tip = Number(tipPercentage.value) / 100;
    let totalTip = bill * tip;
    let totalBill = bill + totalTip;
    let perPerson = totalBill / numberOfPeople;
    perPersonTotal.innerText = `₹${perPerson.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
    numberOfPeople += 1  
    totalPeople.innerText = numberOfPeople
  
    calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    if (numberOfPeople <= 1) {
      return
    }
    numberOfPeople -= 1  
    totalPeople.innerText = numberOfPeople
  
    calculateBill()
}