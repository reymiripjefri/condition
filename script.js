document.getElementById("orderButton").onclick = function () {
    let foodPrice = parselnt(document.getElementByI("food").value);
    let drinkPrice = parselnt(document.getElementByI("drink").value);

    let totalPrice = foodPrice + drinkPrice;

    let discount = 0;

    if(totalPrice > 90) {
        alert('Ok');
    }

    }

    
