let passengers = [  { name: 'Jane', paid: true, ticket: 'coach'}, 
                    { name: 'Doctor', paid: true, ticket: 'firstclass'}, 
                    { name: 'Sue', paid: false, ticket: 'optimal'}, 
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
    let orderFunction;
    if (passenger.ticket === 'firstclass') {
            orderFunction = function() {
            alert('Would you like cockatail or wine?')
        }
        } else if (passenger.ticket === 'optimal') {
            orderFunction = function() {
            alert('Would you like lemonad, water or wine?')
        } 
        } else {
            orderFunction = function() {
            alert('Your choice is cola or water?')
            }
        }
        return orderFunction;
}


function createDinnerOrderFunction(passenger) {
    if (passenger.ticket === 'firstclass') {
            orderDinnerFunction = function() {
            alert('Would you like chicken or pasta?')
        }
        } else if (passenger.ticket === 'optimal') {
            orderDinnerFunction = function() {
            alert('Would you like cheese or bacon?')
        } 
        } else {
            orderDinnerFunction = function() {
            alert('Your choice is nuts or candys?')
            }
        }
        return orderDinnerFunction;

}

// Важно! Нет необходимости повторно проводить действия в ф-ции createDrinkOrder
function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrderFunction(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
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
