// Function to update the result
function updateResult() {
    const baseInput = document.getElementById('base');
    const exponentInput = document.getElementById('exponent');
    const resultDiv = document.getElementById('result');

    const base = baseInput.value;
    const exponent = exponentInput.value;

    if (base === '' || exponent === '') {
        resultDiv.textContent = 'Result: Enter values to see the result';
        resultDiv.classList.remove('result-error', 'result-success');
        resultDiv.classList.add('result-default');
        resultDiv.dataset.fullResult = ''; // Clear previous result
        return;
    }

    const baseNumber = parseFloat(base);
    const exponentNumber = parseInt(exponent, 10);

    if (isNaN(baseNumber) || isNaN(exponentNumber)) {
        resultDiv.textContent = 'Result: Invalid input';
        resultDiv.classList.remove('result-success', 'result-default');
        resultDiv.classList.add('result-error');
        resultDiv.dataset.fullResult = ''; // Clear previous result
        return;
    }

    try {
        const bigBase = BigInt(baseNumber); // Convert base to BigInt
        const result = bigBase ** BigInt(exponentNumber); // Calculate power
        const resultText = result.toString();

        resultDiv.textContent = `Result: ${resultText}`; // Display result
        resultDiv.classList.remove('result-error', 'result-default');
        resultDiv.classList.add('result-success');
        resultDiv.dataset.fullResult = resultText;
    } catch (error) {
        resultDiv.textContent = 'Result: Calculation error';
        resultDiv.classList.remove('result-success', 'result-default');
        resultDiv.classList.add('result-error');
        resultDiv.dataset.fullResult = ''; // Clear previous result
    }
}

// Function to copy the result to clipboard
function copyToClipboard() {
    const resultDiv = document.getElementById('result');
    const fullResult = resultDiv.dataset.fullResult;
    const notification = document.getElementById('notification');

    if (fullResult) {
        navigator.clipboard.writeText(fullResult).then(() => {
            notification.style.display = 'block';
            setTimeout(() => notification.style.display = 'none', 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        notification.textContent = 'No result to copy!';
        notification.style.backgroundColor = 'red';
        notification.style.display = 'block';
        setTimeout(() => notification.style.display = 'none', 2000);
    }
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Attach event listeners to input fields
document.getElementById('base').addEventListener('input', updateResult);
document.getElementById('exponent').addEventListener('input', updateResult);

// Attach event listener to copy button
document.getElementById('copy-button').addEventListener('click', copyToClipboard);

// Attach event listener to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Handle theme mode on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        document.body.setAttribute('data-theme', prefersDarkScheme ? 'dark' : 'light');
    }
});
