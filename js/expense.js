expenseForm.onsubmit= (e) => {
    e.preventDefault()
    console.log(e)

    let requestObject = {
        ExpenseName: e.target[0].value,
        Category: e.target[1].value,
        TransactionDate: e.target[2].value,
        ExpenseAmount: e.target[3].value,
        UserId: e.target[4].value

    }

    fetch('https://localhost:44357/api/Expense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestObject),
        
    })
    
}
//NEDAN HÖR Till get ExpenseData men är inte klar.
const expenseData = (data) => {
    let data1 = document.createElement('p');
    let textNode = document.createTextNode(data.userId);
    data1.appendChild(textNode);
    let data2 = document.createElement('p');
    let textNode1 = document.createTextNode(data.id);
    data2.appendChild(textNode1);
    let data3 = document.createElement('p');
    let textNode2 = document.createTextNode(data.title);
    data3.appendChild(textNode2);

    let paraArray = [para1, para2, para3]
    let paragraphDiv = document.getElementById('maincontentBox')
    paraArray.forEach((para) => {
        paragraphDiv.appendChild(para);
    })
}
const getExpenseData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => { return response.json() })
        .then((data) => { expenseData(data) })
}
//denna försöker lista i console retur värdena med namn. 
const getTodos = () => {
    fetch('https://localhost:44357/api/Expense')
        .then((response) => { return response.json() })
        .then(data => console.log(data))
}
