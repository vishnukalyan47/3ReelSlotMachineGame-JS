const prompt = require("prompt-sync")();

const deposit = () => {

  while(true){

    const depositAmount = prompt("Enter a deposit amount : ");
    const numberDepositAmount = parseFloat(depositAmount);
    
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit, try again!!");
    }
    else {
      return numberDepositAmount
    }
  }
  
};

const numberOfLines=()=>{
  console.log("To be continued..");
}

const depoAmo = deposit();
console.log(depoAmo);

