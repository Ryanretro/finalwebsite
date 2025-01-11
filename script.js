function trackShipment() {
    const trackingNumber = document.getElementById('tracking-number').value;
    const resultDiv = document.getElementById('tracking-result');

    // Simulate tracking result (you can replace this with actual API call)
    if (trackingNumber) {
        resultDiv.innerHTML = `<p>Your shipment with tracking number ${trackingNumber} is currently in transit.</p>`;
    } else {
        resultDiv.innerHTML = '<p>Please enter a valid tracking number.</p>';
    }
}

function estimatePrice() {
    const serviceType = document.getElementById('service-type').value;
    const weight = document.getElementById('weight').value;
    const destination = document.getElementById('destination').value;
    const resultDiv = document.getElementById('price-result');

    // Simulate price estimation (you can replace this with actual calculation logic)
    if (serviceType && weight && destination) {
        const estimatedPrice = (weight * 10).toFixed(2); // Example calculation
        resultDiv.innerHTML = `<p>The estimated price for ${weight}kg to ${destination} via ${serviceType} is $${estimatedPrice}.</p>`;
    } else {
        resultDiv.innerHTML = '<p>Please fill in all fields.</p>';
    }
}
