var data = JSON.parse(localStorage.getItem("add-items"))

data.map(function(element, index){
    var num = document.createElement("td")
    num.textContent = index + 1
    num.setAttribute("id", "nums")
    var details = document.createElement("td")
    details.textContent = element.details
    var price = document.createElement("td")
    price.textContent = element.MRP
    price.setAttribute("id", "price")
    var tr = document.createElement("tr")
    tr.append(num, details, price)
    document.querySelector("#table-row").append(tr)
})