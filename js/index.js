
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  delayedPromise("Перший", 3000),
  delayedPromise("Другий", 1000),
  delayedPromise("Третій", 2000),
  delayedPromise("Четвертий", 1500),
  delayedPromise("П'ятий", 2500),
];


Promise.all(promises)
  .then((results) => {
    console.log("=== Promise.all ===");
    console.log("Усі проміси завершені:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });



function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${value} (затримка ${delay} мс)`);
    }, delay);
  });
}

const racePromises = [
  randomDelay("A"),
  randomDelay("B"),
  randomDelay("C"),
  randomDelay("D"),
  randomDelay("E"),
];


Promise.race(racePromises)
  .then((winner) => {
    console.log("=== Promise.race ===");
    console.log("Найшвидший проміс:");
    console.log(winner);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });
