export function FutureTime() {
  //   let time = 80000;
  let time = prompt("put hours here:");
  let today = new Date();
  let Days = 1000 * 60 * 60 * time;
  let Future = new Date(today.getTime() + Days);
  alert(Future.toISOString());
}
//   console.log(Future.toISOString());
