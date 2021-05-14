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
    if (passenger.ticket === 'firstclass') {
        alert('Would you like cockatail or wine?')
    } else {
        alert('Your choice is cola or water?')
    }

}

function serveCustomer(passenger) {
    createDrinkOrder();
}
