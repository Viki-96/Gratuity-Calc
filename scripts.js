document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const joiningDate = new Date(document.getElementById('joining-date').value);
    const endOfServiceDate = new Date(document.getElementById('end-of-service-date').value);

    // Calculate the difference in years
    const yearsOfService = (endOfServiceDate - joiningDate) / (1000 * 60 * 60 * 24 * 365.25);

    // Calculate daily wage
    const dailyWage = basicSalary / 30;

    // Initialize gratuity
    let gratuity = 0;

    // Calculate gratuity based on years of service
    if (yearsOfService <= 5) {
        gratuity = dailyWage * 21 * yearsOfService;
    } else {
        gratuity = (dailyWage * 21 * 5) + (dailyWage * 30 * (yearsOfService - 5));
    }

    // Cap the gratuity to a maximum of two years' total salary
    const maxGratuity = 2 * basicSalary * 12;
    if (gratuity > maxGratuity) {
        gratuity = maxGratuity;
    }

    // Display the result
    document.getElementById('results').innerText = `End-of-Service Benefits: Dh ${gratuity.toFixed(2)}`;
});
