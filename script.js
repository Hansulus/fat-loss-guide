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

function protein(a){
    const height = Number(document.getElementById("height").value)

    let protein_result =  a * (height - 100)

    if (isNaN(protein_result)) {
        console.log("Ungültige Eingabe erkannt");
    }

    return protein_result

};

const button = document.getElementById("calculate_tdee")
const output_tdee = document.getElementById("output_tdee")
const output_protein1 = document.getElementById("output_protein1")
const output_protein2 = document.getElementById("output_protein2")

button.addEventListener("click", function(){
    const result_tdee = tdee();
    const result_protein1 = protein(1.2);
    const result_protein2 = protein(2); 
    output_tdee.textContent = result_tdee.toFixed();
    output_protein1.textContent = result_protein1.toFixed();
    output_protein2.textContent = result_protein2.toFixed();
})

function popup_activity(){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}