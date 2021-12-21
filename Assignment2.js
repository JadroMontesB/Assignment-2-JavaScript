let nameUser = prompt ("Enter your name");
let nameProduct =  prompt ("Enter your product name");
let amount = prompt ("Enter how many you want");
let price = prompt ("Enter the price");

Calculation(amount, price);

function Calculation (a, b)
{
    let ope = a * b;
    let finalPrice = ope + (ope * .16);

    console.log("User: " + nameUser);
    console.log("Product: " + nameProduct);
    console.log("Amount: " + amount);
    console.log("Price: " + price);
    console.log("Taxes: 16%");
    console.log("Total: " + finalPrice + "$$$ Dlls ");

}