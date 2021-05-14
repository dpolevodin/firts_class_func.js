let passengers = [  { name: 'Jane', paid: true, ticket: 'coach'}, 
                    { name: 'Doctor', paid: true, ticket: 'firstclass'}, 
                    { name: 'Sue', paid: false, ticket: 'firstclass'}, 
                    { name: 'John', paid: true, ticket: 'coach'} ];

let noflylist = ['Doctor'];

function checkNoFlyList(passenger) {
    return (passenger.name === 'Doctor');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);    
}

function processPassenger(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

let allCanFly = processPassenger(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log('Мы не можем лететь, есть пассажиры из черного списка');
}

let allPaid = processPassenger(passengers, checkNotPaid);
if (!allPaid) {
    console.log('Мы не можем лететь, есть пассажиры, которые не заплатили');
}

function printPassenger(passenger) {
    let passenger_is_paid = passenger.paid;
    if (passenger_is_paid === true) {
        console.log(passenger.name + ' оплатил билет');
    } else {
        console.log(passenger.name + ' не оплатил билет');
    }
}

function createDrinkOrder(passenger) {
    let orferFunction;
    if (passenger.ticket === 'firstclass') {
        orferFunction = function() {
        alert('Would you like cockatail or wine?')
        };
    } else {
        orferFunction = function() {
        alert('Your choice is cola or water?')
        }
    }
    return orferFunction;
}

// Важно! Нет необходимости повторно проводить действия в ф-ции createDrinkOrder
function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    //подать обед;
    getDrinkOrderFunction();
    //включить фильм;
    getDrinkOrderFunction();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
