//update price function
function updatePrice(productId, isIncreasing) {
    const productInput = document.getElementById(productId);
    let productNumber = productInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    if (productId == 'case-number') {
        //update case total
        const productPrice = document.getElementById('case-price');
        productPrice.innerText = productNumber * 59;
    }
    else if (productId == 'phone-number') {
        //update phone total
        const productPrice = document.getElementById('phone-price');
        productPrice.innerText = productNumber * 1219;

    }
    calculateTotalPrice();
}

//calculate total price function
function calculateTotalPrice() {
    const phoneTotal = document.getElementById('phone-price');
    const phoneTotalPrice = parseFloat(phoneTotal.innerText);
    console.log(phoneTotalPrice);
    const caseTotal = document.getElementById('case-price');
    const caseTotalPrice = parseFloat(caseTotal.innerText);
    console.log(caseTotalPrice);
    const subTotalPrice = phoneTotalPrice + caseTotalPrice;
    const taxAmount = subTotalPrice * 0.15;
    const totalPrice = subTotalPrice + taxAmount;
    //update on the html
    document.getElementById('sub-total').innerText = subTotalPrice;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalPrice;
}

//handle phone increase-decrease events
document.getElementById('phone-plus').addEventListener('click', function () {

    updatePrice('phone-number', true);
});

document.getElementById('phone-minus').addEventListener('click', function () {

    updatePrice('phone-number', false);

});

//handle case increase-decrease events
document.getElementById('case-plus').addEventListener('click', function () {

    updatePrice('case-number', true);
});

document.getElementById('case-minus').addEventListener('click', function () {

    updatePrice('case-number', false);

});