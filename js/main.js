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
