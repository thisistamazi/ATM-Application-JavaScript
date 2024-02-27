const welcomePage = alert(`Welcome to J Bank! Please insert your card`); 
console.log('Welcome to J Bank! Please insert your card');


//We store users data in two dimentional array
let balance = [['John', 'Bryant', 5000, 5554],
               ['James', 'Stone', 11000, 4554],
               ['Lisa', 'Lee', 7000, 8565]];


//We have 3 tries, if we used up all 3 tries, our card is blocked
let pincodeTries = 3;
while (pincodeTries > 0){
  let pincode = prompt(`Please enter your PIN`);
  console.log(`Please enter your PIN`);
  
//here we need to check if pincode is anything other then numbers or empty space
  if(pincode === ""){
    alert('Please enter PIN');
  }else if (pincode == balance[1][3]){
    
    atm();
    break;
  }else if(!pincode){
    console.log('Please take your card!');
    alert('Please take your card!')
    break;
  }else if(isNaN(pincode)){ 
    alert('PIN should be only a number!');
  }else {
    pincodeTries--;
    alert('You entered wrong PIN! Remaining tries:  ' + pincodeTries);
    console.log('You entered wrong PIN! Remaining tries:  ' + pincodeTries);
  }

// If we dont have any tries left then our card is blocked
  if (pincodeTries === 0){
    alert('Your card was Blocked!');
    console.log('Your card was Blocked!');
    break
  }
}


// here we are triggering atm function if the pin was correct
function atm(){
    console.log('Select an Operation: 1. Balance 2. Deposit 3. Withdrawal');
    let choice = prompt('Select an Operation: 1. Balance 2. Deposit 3. Withdrawal');

    //here we are giving a user ability to cancel operation and take back the card
    if(choice === null){
      console.log('Do you really want to leave?');
      let leaveRequest = confirm('Do you really want to leave?');
      if(leaveRequest === false){
        return atm();
      }else{
        alert('Please take your card!');
        console.log('Please take your card!');
        return;
      }
    }else if (choice == 1){
        checkBalance();
    }else if (choice == 2){
        addBalance();
    }else if (choice == 3){
        withdraw();
    }else if(isNaN(choice) || choice.length > 1 || choice === ''){
      alert('You should enter only a Single Number form Operations!')
    }else if (Number(choice) > 3){
      alert('Please select number from Operations!')
    }


//with this function we are checking a current balance of the user
function checkBalance(){
  console.log(`Dear ${balance[1][0]} your current balance is: ${balance[1][2]}`);
  alert(`Dear ${balance[1][0]} your current balance is: ${balance[1][2]}`);
  return balance[1][2];
}


//with this function we are adding entered amount to the Balance and checking if entered amount is 0 or something else
function addBalance(){
    console.log('How much do you want to deposit?');
    let amount = prompt('How much do you want to deposit?');
    if (amount === null){
      return;
    }else if (Number(amount) === 0 || amount === ''){
        console.log('Please enter correct amount');
        alert('Please enter correct amount');
        return addBalance();
    }else{
    console.log('Deposit was successful! Thank you!');
    alert('Deposit was successful! Thank you!');
    return balance[1][2] += Number(amount);
    }
}

// 
function withdraw() {
  console.log('How much do you want to withdraw?');
  let amountString = prompt('How much do you want to withdraw?');
  let amount = Number(amountString);
  
  if (amountString === null){
    return;
  }else if (amount === 0 || amount === ''|| isNaN(amountString)){
    console.log('Please enter correct amount');
    alert('Please enter correct amount');
    return withdraw();
  }

  //as we are an ATM, we give out set banknotes 
  const availableNotes = [100, 50, 20, 10, 5];
  const result = [];
  let total = 0;

// here we are checking if entered amount is within the Balance limits
  if (amount > 4 && amount <= balance[1][2]) {
    for (let i = 0; i < availableNotes.length; i++) {
      let note = availableNotes[i];
      
      //we are decreasing amount by each note in array starting with 0 index and push it to result then if left amount cant be decreased
      //we dercease it by index 1 in Note array, etc.
      while (amount - note >= 0) {
        amount -= note;
        result.push(note);
      }
    }    

//we are adding up all the notes in total
    for (let i = 0; i < result.length; i++){
      total += result[i];
      
    }
  
  // we decrease balance by total 
    balance[1][2] -= total;
    
    console.log(`Plase take your money: ${result}`);
    alert(`Plase take your money: ${result}`);
  } else if (amount <= 4){
    console.log("Please enter the correct amount!");
    alert("Please enter the correct amount!");
    return withdraw();
  }else {
    console.log("Please enter the correct amount!");
    alert("Please enter the correct amount!");
  }                                                                              
  
  
}


  return atm()

}



