function countDown() {
    const tripDate = document.getElementById('depart').value;
    const date1 = new Date(tripDate);
    const date2 = new Date();
    const daysRemaining = date1.getTime() - date2.getTime();
    const daysToTrip = Math.ceil(daysRemaining / (1000 * 3600 * 24));
    properGrammar(daysToTrip);
    return daysToTrip;
}

function properGrammar (days) {
    if (days ===1) {
        document.getElementById('countdown').innerHTML = days + ' day until your trip!'
    } else {
        document.getElementById('countdown').innerHTML = days + ' days until your trip!'}
}

function tripLength() {
    const cityDestination = document.getElementById('city').value;
    const depart = document.getElementById('depart').value;
    const returnDate = document.getElementById('return').value;
    const departDate = new Date(depart);
    const returningDate = new Date(returnDate);
    const totalDays = returningDate.getTime() - departDate.getTime();
    const tripLength = Math.ceil(totalDays / (1000 * 3600 * 24));
    document.getElementById('trip').innerHTML = `Enjoy your ${tripLength} day trip to ${cityDestination}!`;
}


export { countDown, tripLength }
