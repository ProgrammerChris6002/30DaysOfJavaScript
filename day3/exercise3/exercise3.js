const now = new Date();
let years = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()

month >= 10
    ? month = month
    : month = '0' + month;
date >= 10
    ? date = date
    : date = '0' + date;
hours >= 10
    ? hours = hours
    : hours = '0' + hours;
minutes >= 10
    ? minutes = minutes
    : minutes = '0' + minutes;


console.log(`${years}-${month}-${date} ${hours}:${minutes}`)