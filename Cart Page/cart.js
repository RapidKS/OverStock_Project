var data = JSON.parse(localStorage.getItem("add-items")) || []
showItems(data)
var totalPrice = 0
function showItems(data){
    document.querySelector("#container").textContent = ""
    data.map(function(Element, index){
        var img = document.createElement("img")
        img.setAttribute("src", Element.image)
        img.setAttribute("id", "image")
        var info = document.createElement("p")
        info.textContent = Element.details
        info.setAttribute("id", "info")
        var price = document.createElement("p")
        price.textContent = Element.price
        price.setAttribute("id", "price")
        var remove = document.createElement("button")
        remove.textContent = "Remove Item"
        remove.setAttribute("id", "remove")
        remove.addEventListener("click", function(){
            removeItem(Element, index)
        })
        var rightdiv = document.createElement("div")
        rightdiv.setAttribute("id", "item-right-div")
        rightdiv.append(info, price, remove)
        var items = document.createElement("div")
        items.setAttribute("id", "item")
        items.append(img, rightdiv)
        document.querySelector("#container").append(items)
    })
    function removeItem(Element, index){
        data.splice(index, 1)
        localStorage.setItem("add-items", JSON.stringify(data))
        showItems(data)
    }
    var c = function(acc, element){
        return acc + element.Price
    }
    var price = data.reduce (c,0)
    document.getElementById("total-cost").textContent = "INR " + price
    localStorage.setItem("total-cost", JSON.stringify(price))
}

