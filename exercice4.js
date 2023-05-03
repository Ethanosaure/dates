export function exercice4() {
  // create all divs and add id and classes
  const container = document.createElement("div");
  container.classList.add("container");
  const container_left = document.createElement("div");
  container_left.classList.add("containerLeft");
  const date_div = document.createElement("div");
  date_div.setAttribute("id", "date_div");
  const day_div = document.createElement("div");
  day_div.setAttribute("id", "day_div");
  const year_div = document.createElement("div");
  year_div.setAttribute("id", "year_div");
  const time = document.createElement("p");

  //   array to display corresponding day and month
  function display() {
    const month_array = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day_array = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    // variables getting today's information
    let today = new Date();
    let month = month_array[today.getMonth()];
    let day = day_array[today.getDay()];

    //   displaying today's informations
    date_div.innerText = day;
    day_div.innerText = `${today.getDate()} ${month}`;
    year_div.innerText = today.getFullYear();
    time.innerText = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
  }
  setInterval(display, 1000);
  //   append all divs
  container_left.appendChild(date_div);
  container_left.appendChild(day_div);
  container_left.appendChild(year_div);
  container.appendChild(container_left);
  container.appendChild(time);
  document.body.appendChild(container);
}
