# dates


- Time necessary : `1 day`
- Work mode : `Solo`
- Repository: `dates`
- Deployment stragegy : `GitHub Page`


## Explanations for the exercice

WARNING: TIMEZONES!

Timezones are a mess, they are a developer nightmare. It could be 6 in the morning for you while it's already 8 hours later in Tokyo, and its still yesterday's date in New York.

To try to solve this problem, developpers came with a concept called timezone offset : when using a date in javascript (and in many other programming languages), you'll often see a number at the end of the date. This is the number of hours ahead or behind the Coordinated Universal Time (UTC, in short).

For example in Brussels, we are one hour ahead of UTC, we would write:

```
2020-11-24T16:00+01:00
```

To say we are the 24th of November at 16h, Brussels time (UTC +1h)
Creating a Date object

Handling and displaying dates in javascript always starts with a new Date() declaration, this object will allow you to initialize a reference to a certain point in time. If you do not pass arguments to the function it gives you today's date at the exact time you initialized the variable (up to a milisecond of precision)

```
let now = new Date() // Today's date 
let dateInThePast = new Date('1990-12-25') // 25th December of 1990 (at midnight, since we do not set the time)
```

Getting values

Once you created your date object. There are several ways to display informations from it.
Display the full date

There are a lot if different methods for just displaying the date as a text. You can check these out on MDN :

    toDateString()
    toISOString()
    toLocaleDateString()
    toLocaleString()
    toLocaleTimeString()
    toString()
    toTimeString()
    toUTCString()

They all have their advantages and disadvantages, it could be really useful for debug, but they're not what we will focus on.

A simple example before we move on:

```
let dateInThePast = new Date('1990-12-25')

console.log(dateInThePast.toISOString()) // 1990-12-25T00:00:00.000Z
console.log(dateInThePast.toUTCString()) // Tue, 25 Dec 1990 00:00:00 GMT
console.log(dateInThePast.toString()) // Tue Dec 25 1990 01:00:00 GMT+0100 (Central European Standard Time)
```

There is a method for extracting every information of the date Object. You want to retrieve the day ? Use getDate() ! You want the day of the week ? 0 being sunday, 6 being saturday use getDay().

An example is worth a thousand words :

```
let dateInThePast = new Date('1990-12-25')

console.log(dateInThePast.getDate()) // 25
console.log(dateInThePast.getDay()) // 2 ( = tuesday)
console.log(dateInThePast.getFullYear()) // 1990
console.log(dateInThePast.getHours()) // 1 (midnight, UTC+1)
console.log(dateInThePast.getMilliseconds()) // 0
console.log(dateInThePast.getMinutes()) // 0
console.log(dateInThePast.getMonth()) // 11 (! Months start at 0 !)
console.log(dateInThePast.getSeconds()) // 0
```

If you want to display the dates in UTC time (minus the UTC offset), there is an equivalent for each of these methods, for example getHours() becomes getUTCHours(), et caetera...
Timestamps

Among these functions there is a special one called getTime(), this gives you a special value called epoch, it's the number of miliseconds since the 1st of January 1970.

This is a universal number that you can use across a number of languages and that is particularly useful for date conversion and manipulation.

```
let christmas1995 = new Date('1995-12-25')
let halloween2002 = new Date('2002-10-30')


console.log((halloween2002.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
console.log((halloween2002.getTime() - christmas1995.getTime()) / (1000 * 60) + ' minutes have passed betweeen halloween 2002 and c')
```
You can do wonderful things with timestamps...

```
let halloween2002 = new Date('2002-10-30')
let threeDays = 1000 * 60 * 60 * 24 * 3 // 1000 miliseconds * 60 seconds * 60 minutes * 24 hours * 3 days

let threeDaysPastHalloween2002 = new Date(
  halloween2002.getTime() + threeDays
)

console.log(threeDaysPastHalloween2002.toString())
```


## Exercices

### Exercise 1

Find the timezones of :

    Anchorage (USA)
    Reykjavik (Iceland)
    Saint-Petersburg (Russia)

And display the date and time of these cities along with the time and date of Brussels.
### Exercise 2

Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

Write a function to find how many days have passed since any point in time (after 1970).
### Exercise 3

Using timestamps, find the exact time and date we will be in 80000 hours.

Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.
### Exercise 4

Using HTML, CSS (and javascript, of course) reproduce the following picture. This should be centered both horizontaly and vertically in your page.


## Author

- [@ethanosaure](https://github.com/Ethanosaure)


## BADGE

![Javascript](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
![Css](https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)

## Link

[Github Page](https://ethanosaure.github.io/dates/)


## Screenshots

```
The picture had to reproduct a figma, that's the result:
```

| rendered | To reproduct       |
| :-------- | :-------          |
| ![Site Screenshot](https://github.com/Ethanosaure/dates/blob/main/img/dates.PNG)   | ![figma to reproduct](https://github.com/Ethanosaure/dates/blob/main/img/date-figma.PNG)     |








