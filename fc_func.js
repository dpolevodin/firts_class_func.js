let passengers = [  { name: 'Jane', paid: true}, 
                    { name: 'Doctor', paid: true}, 
                    { name: 'Sue', paid: false}, 
                    { name: 'John', paid: true} ];

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
