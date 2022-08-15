
//Date Method 1 - getDate() - returns the day of the month for specified date
const vetBooking = new Date('August 17, 2022 14:30:00');
const date1 = vetBooking.getDate();

console.log('date of Booking: ' + date1);

//Date Method 2 - getDay() returns day of the week for a specified date (sun - sat 0 - 6)
const day1 = vetBooking.getDay();

console.log(day1); //prints day as a number 

//Date Method 3 - pints day of week from array based on getDay() 
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
let day2 = days[vetBooking.getDay()];

console.log('Day of Booking: ' + day2); 

//Date Method 4 - getHour() returns hour for specified date, getMinutes returns minutes for specified date 
console.log('time of Booking: ' + vetBooking.getHours() + '.' + vetBooking.getMinutes());

//Date Method 5 - compare dates
const today = new Date(); //returns todays date

if (vetBooking > today) {
    text = "Booking is in the future ";
  } else {
    text = "Booking has passed ";
  }

console.log(text);  


