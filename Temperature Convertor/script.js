function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const tempUnit = document.getElementById('tempUnit').value;
    let result = '';

    switch (tempUnit) {
        case 'celsius':
            result = `${inputTemp} °C is ${(inputTemp * 9/5) + 32} °F and ${inputTemp + 273.15} K`;
            break;
        case 'fahrenheit':
            result = `${inputTemp} °F is ${(inputTemp - 32) * 5/9} °C and ${(inputTemp - 32) * 5/9 + 273.15} K`;
            break;
        case 'kelvin':
            result = `${inputTemp} K is ${inputTemp - 273.15} °C and ${(inputTemp - 273.15) * 9/5 + 32} °F`;
            break;
    }

    document.getElementById('result').textContent = result;
}
