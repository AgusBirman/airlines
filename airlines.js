const flights = [
    { id: 00, to: "New York", from: "Barcelona", cost: 700, layover: false },
    { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, layover: true },
    { id: 02, to: "Paris", from: "Barcelona", cost: 210, layover: false },
    { id: 03, to: "Roma", from: "Barcelona", cost: 150, layover: false },
    { id: 04, to: "London", from: "Madrid", cost: 200, layover: false },
    { id: 05, to: "Madrid", from: "Barcelona", cost: 90, layover: false },
    { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, layover: true },
    { id: 07, to: "Shangai", from: "Barcelona", cost: 800, layover: true },
    { id: 08, to: "Sydney", from: "Barcelona", cost: 150, layover: true },
    { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, layover: false },
];

let userName = prompt(`Hello! Welcome to our service. Please enter your name:`);

let greeting = (userName) => {
    alert(`Hi ${userName}! welcome!`)
}


function withLayover(element) {
    return element === true ? "has layover" : "has no layover";
}


function printFlights(flights){

    let allFlights = "";
    alert(`These are today's flights:`);   

    for( let index = 0; index < flights.length; index++){   
    allFlights += `${flights[index].from} to ${flights[index].to} cost ${flights[index].cost} and ${withLayover(flights[index].layover)}\n`;
    }

    alert(allFlights);
}


function flightsWithLayover() {

    let flightsLayover = "";
    alert("Flights with layover:");

    for(let i = 0; i < flights.length; i++){
        if(flights[i].layover){
            flightsLayover += `${flights[i].from} to ${flights[i].to} cost ${flights[i].cost}\n`;
        }      
    }

    alert(flightsLayover);
}


function costsAverage(){

    let averageCost= 0;
    let AverageTotalCost3= 0;

    for(let i = 0; i < flights.length; i++) {
        averageCost += flights[i].cost;
    }

    AverageTotalCost3 = averageCost/flights.length;
    alert(`The average cost of flights is: ${AverageTotalCost3}`);
}


function lastFiveFlights() {

    let lastFivePrint = "";
    alert(`These are the last 5 flights of the day:`);

    for(let i = flights.length - 5; i < flights.length; i++){
        lastFivePrint += `${flights[i].from} to ${flights[i].to} cost ${flights[i].cost} and ${withLayover(flights[i].layover)}\n`;
    }

    alert(lastFivePrint);
}


let logIn = () => {
    let role = prompt(`Hello! Are you USER or ADMIN?:`).toUpperCase();

        if(role !== "USER" && role !== "ADMIN") {
            alert(`Incorrect entry. Type in USER or ADMIN correctly`);
            return logIn();
        }
        
        if(role == "USER"){
            user();
        }

        if(role == "ADMIN"){
            admin();
        }
}
 

function user () {

    let availableFlight = "";
    let costFlight = prompt(`Please enter how much your budget would be, we will show you the flights available according to the budget`);

    if(isNaN(costFlight)){
        alert(`Please enter a valid number`);
        return user();
    }

    for(let i = 0; i < flights.length; i++){
        if(costFlight >= flights[i].cost){
            availableFlight += `${flights[i].from} to ${flights[i].to} cost ${flights[i].cost} and ${withLayover(flights[i].layover)}\n`;
            }
        }

    if(availableFlight){
        alert(`These are the flights available according to your budget`);
        alert(availableFlight);

    } else {
        alert(`There are no flights available for ${costFlight} or less, please enter a higher number`);
        let noFoundFlight = confirm(`Do you want to search for flights with a new budget?`);

        if(noFoundFlight){
                return user();
        }
    }
    continueInProgram();
}


function admin() {

    let action = prompt(`Choose the action you would like to perform: ADD, DELETE or EXIT`).toUpperCase();

    if(action !== "ADD" && action !== "DELETE" && action !== "EXIT") {
        alert(`Incorrect entry. Type in ADD, DELETE or EXIT correctly`);
        return logIn();
    }
    
    if(action == "ADD"){
        addFlights();
    }else if(action == "DELETE"){
        deleteFlights();
    }else if(action == "exit"){
        continueInProgram();
    }
}


function addFlights() {
    if(flights.length> 15){
        alert(`No es posible agregar mas vuelos(Maximo 15)`);
        continueInProgram();
    } else {

    let to = prompt(`Where the flight is going?`);
    let from = prompt(`Where the flight comes from?`);
    let cost = prompt(`How much is the flight?`);
    let layoverNew = confirm(`Does the flight have a layover?`);

    flights.push({
        id: flights.length,
        to:to,
        from:from,
        cost:cost,
        layover: layoverNew
     } );
     
     printFlights(flights);
     continueInProgram();
    }
}


function deleteFlights() {
    let idFlight = prompt(`Enter the ID of the flight to delete`);

    if(idFlight < 0 || idFlight > flights.length || isNaN(idFlight)){

        alert(`Enter a number within the range (Range is 0 to ${flights.length})`);
        deleteFlights();
    } else{

        flights.splice(idFlight, 1);
        
        for(let i = 0; i < flights.length; i++){
            flights[i].id = i;
        }
    }
    alert(printFlights(flights));
    continueInProgram();
}


function continueInProgram() {

    let responde = confirm(`Do you want to do another task?`);

    if(responde) {
        logIn();
    } else {
        alert(`Thank you very much, we hope to see you soon`);
    }
}


//LLamadas de las funciones
greeting(userName);
printFlights(flights);
flightsWithLayover();
costsAverage();
lastFiveFlights();
logIn();




