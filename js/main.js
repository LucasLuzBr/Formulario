function calulate(){

}

function calculateGrossSalary(){

    var grossSalary = document.querySelector('#workedHours').value * document.querySelector('#hourValue').value
    valueGrossSalary = grossSalary
    document.querySelector('#grossSalary').value = grossSalary.toFixed(2)

}

function calculateGratification(){

    if (document.querySelector('#workedHours').value > 160){

        document.querySelector('#gratification').value = 15 * grossSalary.value / 100
        valueGratification = 15 * grossSalary.value / 100 

    } else {

        document.querySelector('#gratification').value = "0"
    
    }
}

function calculateIrrf(){

    if (grossSalary.value <= 1903.98){

        document.querySelector('#irrf').value = "Insento"
        valueIrrf = 0

    } else if (grossSalary.value < 2826.65){

        document.querySelector('#irrf').value = "7,50"
        valueIrrf = 7.5 * grossSalary.value / 100

    } else if (grossSalary.value < 3751.05){

        document.querySelector('#irrf').value = "15,00"
        valueIrrf = 15 * grossSalary.value / 100

    } else if(grossSalary.value < 4664.68){

        document.querySelector('#irrf').value = "22,50"
        valueIrrf = 22.5 * grossSalary.value / 100

    } else {

        document.querySelector('#irrf').value = "27,50"
        valueIrrf = 27.5 * grossSalary.value / 100

    }
}
