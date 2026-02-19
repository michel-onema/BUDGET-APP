const monthFilter =
document.getElementById("monthFilter");

      list.innerHTML = "";

      const filtered =
transactions.filter(function(t){
       if(!selectedMonth) return true;

       const transactionDate = newDate(t.date);
transactionDate.toIsostring().slice(0,7);
    retuen month === selectedMonth;
});

       filtered.forEach(addToDoM);
      // recalcul du solde
      let total = 0;
      filtered.forEach(t => total += t.amount);
      balance.innerText = total + "$";

      monthFilter.addEventListener("change", filterByMonth);



const category =
document.getElementById("category");

const form=
document.getElementById("form");
const text=
document.getElementById("text");
const amount=
document.getElementById("amount");
const list=
document.getElementById("list");
const balance=
document.getElementById("balance");
let transactions = 
JSON.parse(localStorage.getItem("transactions"))   [];

function updateBalance(){
    let total = 0;
    transactions.forEach(function(t){
        total  += t.amount;
    });
    balance.innerText = total + "$";
}

function addTransaction(e){
    e.preventDefault();
    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: parseFloat(amount.value)
        category: category.value,
        Date: new date().toIsostring()
    };
    transactions.push(transaction);
    saveTransactions();
    addToDoM(transaction);
function saveTransactions(){
    localStorage.setItem("transactions",
JSON.stringify(transaction));
}
     updatechart();
    filterByMonth();
    text.value = "";
    amount.value = "";
}
function addToDoM(transaction){
    const li = document.createElement("li");

    li.innerHTML =
        <div>
            <strongs>${transaction.text}</strongs>
            <small>${transaction.category</small>
        </div>
          
          <span>${sign}$
    {Math.abs(transaction.amount)}  $</span>
             <button class="delete-btn" 
    onclick="removeTransaction(${transaction.id})">⛌</button>
          list.appendChild(li);
}

function removeTransaction(id){
    transaction =
transactions.filter(function(t){
    return t.id !== id;
})
saveTransactions();
list.innerHTML = "";
transactions.forEach(addToDoM);
filterByMonth();
updatechart();
}

form.addEventListener("submit",addTransaction);
filterByMonth();
updatechart();

const ctx =
document.getElementById('mychart');

let chart ;

function updatechart(){
    const expenseTransactions =
transactions.filter(t => t.amount < 0);

const labels = expenseTransactions.map(t => t.text);

const data = expenseTransactions.map(t => Math.abs(t.amount));

    if(chart){
    chart.destroy();
 }

     chart = new chart(ctx, {
      type: 'pie',
         data: {
           labels: labels,
            datasets: [{
               data: data,
                backgroundcolor:[
                  '#ff6384',
                  '#36a2eb',
                  '#ffce56',
                  '#4bc0c0',
                  '#9966ff',
               ]
            }]
       }
   })

}

updatechart();