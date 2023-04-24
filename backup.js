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

document.querySelector("#order-button").addEventListener("click", storeData)

var data = []
function storeData() {
    var details = {
        //billind details
        bill_email : document.getElementById("left-email").value,
        bill_fname : document.getElementById("left-fname").value,
        bill_lname : document.getElementById("left-lname").value,
        bill_company : document.getElementById("left-company").value,
        bill_tax : document.getElementById("left-tax").value,
        bill_add1 : document.getElementById("left-add1").value,
        bill_add2 : document.getElementById("left-add2").value,
        bill_country : document.getElementById("left-country").value,
        bill_city : document.getElementById("left-city").value,
        bill_state : document.getElementById("left-state").value,
        bill_zip : document.getElementById("left-zip").value,
        bill_phone : document.getElementById("left-phone").value,
        //Shopping details
        shop_email : document.getElementById("right-email").value,
        shop_fname : document.getElementById("right-fname").value,
        shop_lname : document.getElementById("right-lname").value,
        shop_company : document.getElementById("right-company").value,
        shop_tax : document.getElementById("right-tax").value,
        shop_add1 : document.getElementById("right-add1").value,
        shop_add2 : document.getElementById("right-add2").value,
        shop_country : document.getElementById("right-country").value,
        shop_city : document.getElementById("right-city").value,
        shop_state : document.getElementById("right-state").value,
        shop_zip : document.getElementById("right-zip").value,
        shop_phone : document.getElementById("right-phone").value,
        //payment info
        card : document.getElementById("cards").value,
        credit_card_no : document.getElementById("cc-num").value,
        exp_date1 : document.getElementById("ed-1").value,
        exp_date2 : document.getElementById("ed-2").value,
        security_code : document.getElementById("sc-input").value,
    }
    data.push(details)
}
localStorage.setItem("Order_Details", JSON.stringify(data))