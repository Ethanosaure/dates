export function HowManyDays() {
  // ma date d'anniversaire
  const d = new Date("1998-01-26");
  let HowManyDays = d.getTime() / (1000 * 60 * 60 * 24);

  let date = new Date(prompt("Enter a date (year-month-day)"));
  let Days = date.getTime() / (1000 * 60 * 60 * 24);

  alert(Days);
  console.log(HowManyDays);
}
