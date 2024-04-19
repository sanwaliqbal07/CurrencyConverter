#! /usr/bin/env node
import inquirer from "inquirer"

const currency:any = {
    USD: 1, //base currency
    EURO: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,

};

let userAnswer:any = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD","EURO","GBP","INR","PKR"]
   
    },
{
     name: "to",
     message: "Enter To Currency",
     type: "list",
     choices: ["USD","EURO","GBP","INR","PKR"]
},
{
    name: "amount",
    message: "Enter Your Ammount",
    type: "number",
}
]
)
let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
