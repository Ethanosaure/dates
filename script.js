// anchorage -9h UTC
// reykjavik -0h UTC
// saint petersbourg +3h UTC

// get time from USA
const d = new Date();
const localTime = d.getTime();
const localOffset = d.getTimezoneOffset() * 60000;
const utc = localTime + localOffset;
const offset = -5; // UTC of USA Eastern Time Zone is -05.00
const usa = utc + 3600000 * offset;
const usaTimeNow = new Date(usa).toLocaleString();
console.log(usaTimeNow);

// get time from Island
const offsetIsland = 0;
const Island = utc + 3600000 * offsetIsland;
const IslandTimeNow = new Date(Island).toLocaleString();
console.log(IslandTimeNow);

// get time from St petersbourg
const offsetRussia = +3;
const Russia = utc + 3600000 * offsetRussia;
const RussiaTimeNow = new Date(Russia).toLocaleString();
console.log(RussiaTimeNow);

// get time from Brussels
const offsetBrussels = +1;
const Brussels = utc + 3600000 * offsetBrussels;
const BrusselsTimeNow = new Date(Brussels).toLocaleString();
console.log(BrusselsTimeNow);
