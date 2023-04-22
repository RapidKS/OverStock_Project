var data = JSON.parse(localStorage.getItem("add-items")) || []

if(data.length != 0){
    document.querySelector(".empty-cart").textContent = ""
}

showItems()

var totalPrice = 0

function showItems(){
    data.map(function(Element, index){
        var img = document.createElement("img")
        img.textContent = Element.image
        img.setAttribute("id", "image")
        var info = document.createElement("p")
        info.textContent = Element.Details
        info.setAttribute("id", "info")
        var price = document.createElement("p")
        price.textContent = Element.Price
        price.setAttribute("id", "price")
        var items = document.createElement("div")
        items.setAttribute("id", "item")
        items.append(img, info, price)
        document.querySelector("#container").append(items)
    })
    var c = function(acc, element){
        return acc + element.Price
    }
    var price = data.reduce (c,0)
    document.getElementById("total-cost").textContent = "INR " + price
    localStorage.setItem("total-cost", JSON.stringify(price))
}

