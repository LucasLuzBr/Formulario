function calulate(){

}

function calculateGrossSalary(){

    var grossSalary = document.querySelector('#workedHours').value * document.querySelector('#hourValue').value
    valueGrossSalary = grossSalary
    document.querySelector('#grossSalary').value = grossSalary.toFixed(2)

}