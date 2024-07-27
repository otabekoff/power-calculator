# Power Calculator

## Overview

Power Calculator is a modern web application that calculates the power of a number raised to an exponent. It features live updates as you type, supports light and dark themes, and allows you to copy results to the clipboard. The application uses local storage to save the user's theme preference and ensure a consistent experience on subsequent visits.

## Features

- **Live Calculation**: Computes the result as you enter values for base and exponent.
- **Dynamic Theme Switching**: Automatically detects and applies the user's system theme on first load, with the option to toggle between light and dark modes. Theme preference is saved in local storage.
- **Result Clamping**: Long results are clamped with ellipsis to prevent overflow and maintain layout consistency.
- **Copy to Clipboard**: Easily copy results to the clipboard with a dedicated button.
- **Responsive Design**: Alerts and layout adapt to different screen sizes and devices.

## Getting Started

To use the Power Calculator, follow these steps:

1. **Clone the Repository**:
    
    ```bash
    git clone https://github.com/otabekoff/power-calculator.git
    ```
    
2. **Navigate to the Project Directory**:
    
    ```bash
    cd power-calculator
    ```
    
3. **Open the `index.html` File**:
You can open `index.html` directly in your browser to start using the calculator.

## Project Structure

- `index.html`: Contains the structure and layout of the application.
- `styles.css`: Contains styles for the light and dark themes, input fields, result display, and alerts.
- `script.js`: Contains the JavaScript logic for calculating powers, handling theme changes, copying results to the clipboard, and displaying alerts.

## Usage

1. **Enter Values**:
    - Input the base number and exponent in the respective fields.
    - The result will be displayed automatically as you type.
2. **Copy Result**:
    - Click the "Copy to Clipboard" button to copy the result to your clipboard. An alert will briefly appear to confirm the action.
3. **Toggle Theme**:
    - Use the "Toggle Theme" button to switch between light and dark modes. Your theme preference will be saved for future visits.

## Theme Management

- **Automatic Theme Detection**: On first load, the application detects the user's system theme and applies it.
- **Manual Theme Toggle**: Users can manually switch themes using the "Toggle Theme" button.
- **Persistent Theme**: The selected theme is saved in local storage and applied automatically on subsequent visits.

## Styling and Clamping

- The result text is clamped to one line using CSS properties. Long results are handled gracefully to avoid layout issues.
- Alerts are positioned at the top-right of the page to ensure visibility and accessibility.

## Dependencies

This project does not rely on any external libraries or frameworks. It uses standard HTML, CSS, and JavaScript.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure that your code adheres to the project's style guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/otabekoff/power-calculator).