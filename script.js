let expenses = JSON.parse(localStorage.getItem("expenses")) || []

function save() {
  localStorage.setItem("expenses", JSON.stringify(expenses))
}

let form = document.getElementById("expense-form")
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let title = document.getElementById("title").value
    let amount = Number(document.getElementById("amount").value)
    let category = document.getElementById("category").value
    let date = document.getElementById("date").value
    let exp = { id: Date.now(), title, amount, category, date }
    expenses.push(exp)
    save()
    form.reset()
    alert("Added")
  })
}

let list = document.getElementById("expense-list")
if (list) {
  function show() {
    list.innerHTML = ""
    for (let exp of expenses) {
      let row = document.createElement("tr")
      row.innerHTML = `
        <td>${exp.title}</td>
        <td>₹${exp.amount}</td>
        <td>${exp.category}</td>
        <td>${exp.date}</td>
        <td><button onclick="del(${exp.id})">Delete</button></td>
      `
      list.appendChild(row)
    }
  }
  window.del = function(id) {
    expenses = expenses.filter(x => x.id !== id)
    save()
    show()
  }
  show()
}

let bal = document.getElementById("balance")
let inc = document.getElementById("income")
let expEl = document.getElementById("expense")
if (bal && inc && expEl) {
  let income = 0
  let expense = 0
  for (let x of expenses) {
    if (x.category === "Income") income += x.amount
    else expense += x.amount
  }
  bal.textContent = "₹" + (income - expense)
  inc.textContent = "₹" + income
  expEl.textContent = "₹" + expense
}
