//The provided HTML code represents a BMI (Body Mass Index) Age Calculator project. Here's a breakdown of its components:

//1. **DOCTYPE Declaration**: Defines the document type and version of HTML being used.

//2. **HTML Structure**: The overall structure of the web page.

//3. **Head Section**: Contains metadata about the document like character encoding, viewport settings, and the title of the page.

//4. **Title**: Displays the title of the webpage in the browser tab.

//5. **External CSS Link**: Links to an external stylesheet named "style.css" for styling the webpage.

//6. **Body Section**: Contains the visible content of the webpage.

//7. **Calculator Section**: Contains the BMI Age Calculator interface.

//   - **Header (H1)**: Displays the title of the calculator, "BMI Age Calculator".
   
//   - **Inputs**: Two input fields for the user to enter their height and weight in centimeters and kilograms, respectively.
   
//   - **Calculate Button**: A button labeled "Calculate" to trigger the calculation of BMI age.
   
//   - **Result Paragraph (P)**: An empty paragraph element with the id "result" to display the calculated result.
   
//   - **Footer**: Contains attribution information, mentioning the developer with a link to their GitHub profile.

//8. **Script Tag**: Links to an external JavaScript file named "script.js" to handle the BMI age calculation logic.

//This project allows users to input their height and weight, calculate their BMI age, and view the result on the webpage. Additionally, it acknowledges the developer responsible for creating the project.

function calculateAge() {
        var height = parseFloat(document.getElementById('height').value);
        var weight = parseFloat(document.getElementById('weight').value);
        
        if (isNaN(height) || isNaN(weight)) {
            document.getElementById('result').innerText = "Please enter valid height and weight.";
            return;
        }
        
        var bmi = weight / ((height / 100) * (height / 100));
        var age = Math.round(bmi * 0.4 + 20);
        
        document.getElementById('result').innerText = "Estimated age: " + age;
    }