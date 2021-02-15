function countDown(tripDate) {
    const date1 = new Date(tripDate);
    const date2 = new Date();
    const difference = date1.getTime() - date2.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24)); 
    document.getElementById('countdown').innerHTML = days + ' until your trip!';
    return days;
}

export { countDown }