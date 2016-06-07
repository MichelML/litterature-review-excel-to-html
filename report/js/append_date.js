var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ],
    date = new Date(),
    day = date.getDate(),
    monthIndex = date.getMonth(),
    year = date.getFullYear();

document.write('<h5 class="text-center text-italic"><mark>' + day + ' ' + monthNames[monthIndex] + ' ' + year + '</mark></h5>');