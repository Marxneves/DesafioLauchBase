const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


function createTransaction(transactions){
  user.transactions.push(transactions);
  if(transactions.type == 'credit'){
    user.balance = user.balance + transactions.value
  }
  else{
    user.balance = user.balance - transactions.value
  }
  
}

function getHigherTransactionByType(type){
  let maiorValor = {type:"credit",value: 0};

    for( value of user.transactions){
      if(type == value.type){
        if(value.value > maiorValor.value){
          maiorValor = value
        }
      }
    }
    console.log(maiorValor);  
}

function getAverageTransactionValue(){
  let total = 0
  for(value of user.transactions){
    total += value.value  
  }
  console.log(total/user.transactions.length)
}

function getTransactionsCount(){
  let credit=0 , debit = 0
  for(type of user.transactions){
    if(type.type == "credit")
        credit++;
    else
        debit++;
  }
  console.log(`{ credit:${credit}, debit:${debit} }`)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
