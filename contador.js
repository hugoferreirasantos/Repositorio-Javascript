document.getElementById('convert').onclick = tempconvert;
document.getElementById('clear').onclick = clearform;

function tempconvert(){
    var Fahrenheit = document.getElementById('Fahrenheit').value;
    var Celsius = document.getElementById('Celsius').value;

    if(isNaN(Fahrenheit) || isNaN(Celsius)){
        alert('Digite um valor válido ');
        return
    }else if(Fahrenheit === ""){
       Fahrenheit = (parseFloat(Celsius) * 1.8) + 32;
    }else if(Celsius === ""){
       Celsius = (parseFloat(Fahrenheit) - 32) / 1.8;
    }

    document.getElementById('Fahrenheit').value = parseFloat(Fahrenheit).toFixed(1);
    document.getElementById('Celsius').value = parseFloat(Celsius).toFixed(1);
}

function clearform(){
    document.getElementById('Fahrenheit').value = "";
    document.getElementById('Celsius').value = "";
}


