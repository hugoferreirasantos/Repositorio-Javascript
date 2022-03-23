//Pergunta qual a temperatura em Celsius(C);
//Pergunta qual a temperatura em Farenheit(F);

var temperatureC = prompt("Digite a temperatura em Celsius para converter para Farenheit:");
var temperatureF = prompt("Digite a temperatura em Farenheit para converter para Celsius:")

//Converter a temperatura para Farenheit(F);
//Converter a temperatura para Celsius(C);

var convertToFarenheit = (temperatureC * 1.8) + 32
var convertToCelsius = (temperatureF - 32) / 1.8


//Mostarar o resultado no Console;
console.log("A temperatura em Farenheit é: " + convertToFarenheit);
console.log("A temperatura em Celsius é: " + convertToCelsius);