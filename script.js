// document.getElementById('kitem-1').addEventListener('click', function () {
//     handleProductClick('kitem-1');

//     //const itemName = document.getElementById('kitem-1-name');
//     //console.log(itemName.innerText);

//     // setPost(itemName.innerText);

//     //const itemPrice = document.getElementById('kitem-1-price');
//     // const price = setPrice(itemPrice.innerText);

//     // checkPrice(price);

//     // setTotalPrice();

// })

document.getElementById('coupon-btn').addEventListener('click', function () {

    const totalPrice = document.getElementById('total-price');
    let itemVal = parseFloat(totalPrice.innerText);
    //console.log(itemVal);
    setDiscount(itemVal);
    setTotalPrice();
})

function setPost(nameId) {
    const olField = document.getElementById('ol-list')

    const li_elem = document.createElement('li');

    li_elem.innerHTML = nameId;
    olField.appendChild(li_elem);
}

function setPrice(price) {

    const purchaseField = document.getElementById("total-price");
    const purchaseAmount = purchaseField.innerText;
    //console.log(purchaseAmount);


    // //console.log(prevDepositAmount);
    const newpurchaseAmount = parseFloat(price) + parseFloat(purchaseAmount);
    purchaseField.innerText = newpurchaseAmount;

    const purchaseBtnField = document.getElementById('purchase-btn');
    if (newpurchaseAmount > 0) {
        purchaseBtnField.disabled = false;
    }
    else {
        purchaseBtnField.disabled = true;
    }

    return newpurchaseAmount
}

function setTotalPrice() {

    const prevPurchaseField = document.getElementById("total-price");
    const prevPurchaseAmount = prevPurchaseField.innerText;

    const DiscountField = document.getElementById("total-discount");
    const DiscountAmount = DiscountField.innerText;

    const totalPurchaseField = document.getElementById("all-total");
    const PurchaseAmount = parseFloat(prevPurchaseAmount) - parseFloat(DiscountAmount);

    totalPurchaseField.innerText = PurchaseAmount;
}

function setDiscount(realPrice) {
    const DiscountField = document.getElementById("total-discount");
    //const discountAmount = DiscountField.innertext;
    //console.log(purchaseAmount);

    const codeDiscount = document.getElementById("discount-code");
    const couponCode = codeDiscount.value;
    const val = parseFloat(couponCode.substring(couponCode.length - 3));
    //console.log(realPrice);
    //console.log(typeof val);
    //console.log(val);

    if (isNaN(val) || val.length === 0) {
        let valueDiscount = 0.0;
        //console.log("in if");
        let newDisocuntAmount = parseFloat(valueDiscount);
        DiscountField.innerText = newDisocuntAmount;
    }
    else {
        //console.log(parseFloat(val.substring(val.length - 3)));
        let valueDiscount = realPrice * (val) / 1000;
        //console.log("in else");
        //console.log(valueDiscount);

        let newDisocuntAmount = parseFloat(valueDiscount);
        DiscountField.innerText = newDisocuntAmount;
        //console.log(newDisocuntAmount);
    }

}

function checkPrice(tot_price) {
    const btnField = document.getElementById('coupon-btn');
    if (tot_price > 200) {
        btnField.disabled = false;
    }
    else {
        btnField.disabled = true;
    }
}

function reset() {
    location.reload();
}

function handleProductClick(productId) {
    // Get the item name and price elements based on the product ID
    const itemName = document.getElementById(productId + '-name');
    const itemPrice = document.getElementById(productId + '-price');

    // Get the name and price values
    setPost(itemName.innerText);
    const price = setPrice(itemPrice.innerText);

    checkPrice(price);

    setTotalPrice();
}