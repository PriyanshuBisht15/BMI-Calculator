function calculateBMI() {
    let weight =document.getElementById("weight").value;
    let height =document.getElementById("height").value;

    

    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}
