function tdee() {
    const weight = Number(document.getElementById("weight").value)
    const age = Number(document.getElementById("age").value)
    const height = Number(document.getElementById("height").value)

    const gender = Number(document.getElementById("gender").value)
    const activity_lvl = Number(document.getElementById("activity_lvl").value)

    let tdee_result = ((10 * weight) + (6.25 * height) - (5 * age) + gender) * activity_lvl

    if (isNaN(tdee_result)) {
        console.log("Ungültige Eingabe erkannt");
    }   

    return tdee_result

    
};

const button = document.getElementById("calculate_tdee")
const output = document.getElementById("output_tdee")

button.addEventListener("click", function(){
    const result = tdee();
    output.textContent = result.toFixed();
})
