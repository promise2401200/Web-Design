function calculatePay() {
    const name = document.getElementById('name').value;
    const hoursWorked = parseFloat(document.getElementById('hours').value);
    const ratePerHour = parseFloat(document.getElementById('rate').value);
    
    // Calculate basic pay
    const basicPay = hoursWorked * ratePerHour;
    let tax = 0;

    // Calculate tax based on the basic pay
    if (basicPay > 50000) {
        tax = basicPay * 0.20; // 20% tax
    } else if (basicPay >= 20000 && basicPay <= 50000) {
        tax = basicPay * 0.10; // 10% tax
    } // No tax for below 20000
    
    // Calculate net pay
    const netPay = basicPay - tax;

    // Display the result
    document.getElementById('result').innerHTML = `
        <h3>Pay Summary for ${name}</h3>
        <p>Basic Pay: $${basicPay.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p>Net Pay: $${netPay.toFixed(2)}</p>
    `;
}
