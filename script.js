let calculate = () => {
    
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    if (weight == "" || height == "") {
        document.querySelector("#output").innerHTML = "Enter all the values!";
    }
    else{
    let bmi = (parseFloat(weight) / ((parseFloat(height) * parseFloat(height)))).toFixed(2);


        if (bmi < 18.6) {
            document.querySelector("#output").innerHTML = `Under-Weight : ${bmi}(BMI)`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            document.querySelector("#output").innerHTML = `Normal : ${bmi}(BMI))`;
        }
        else {
            document.querySelector("#output").innerHTML = `Over-Weight : ${bmi}(BMI)`;
        }
}

};