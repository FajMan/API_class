//store an object 

localStorage.setItem("myObject", JSON.stringify({name:"Emmy", age: 20}));

// localStorage.removeItem('myObject')
// localStorage.clear()

const storeObject = JSON.parse(localStorage.getItem("myObject"));
console.log(storeObject)

// Web storage API is a mechanism provider by web broswer to store key-value pairs in a web Application
// Local storage is useful for storing data that should be available across broswer session Example User Preference
// Session Storage is useful for storing temporary data that should accessable duruing the lifetime of current broswer session

// Key features of Web storage API
// 1. Key-value pairs means it is storing in object like format
//2. Synchronous means it is going to store data as it appears
//3. Asynchronous
//4. Same origin policy means the data store in local storage will apply to the website it is saved from

// Example of Local Storage
localStorage.setItem("theme", "dark");
localStorage.setItem("fontSize", "10px")

const getObject = (localStorage.getItem("theme"));
const getObject2 = (localStorage.getItem("fontSize"));

console.log(getObject,);
console.log(getObject2);

// Example of Session Storage
sessionStorage.setItem("formData", JSON.stringify({name:"Chapo", age: 30}));

const getData = JSON.parse(sessionStorage.getItem("formData"));
console.log(getData.name);


// Synchronous code is executed line by line, in order, where each operation must complete before moving on to the next.

// Asynchronous code, on the other hand, allows operations to execute without blocking the main execution thread. This means other tasks can run while waiting for the async operation to complete.

// Asynchronous Patterns
// Callback
function myDisplayer(some) {
    return some;
  }
  
  function myFormatter(solution) {
    return `The result is ${solution}`;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    return myCallback(sum); 
  }
  
  const result = myCalculator(5, 5, myDisplayer);
  const result2 = myCalculator(5, 5, myFormatter);
  console.log(result);
  console.log(result2);


function performTasks(taskName, callback) {
  console.log(`Starting task: ${taskName}`);

  console.log("loading...");

  setTimeout(() => {
    console.log(`Finished task: ${taskName}`);
    callback();
  }, 1000)
}


function taskCompleted() {
  console.log("Task is complete");
}

performTasks('Download File', taskCompleted)


// Simulating Fetching a data from an API
const api = [
  {
    name: "Mubarak",
    language: "Birum"
  },
  {
    name: "Chapo",
    language: "Okun"
  },
  {
    name: "Opera",
    language: "Yoruba"
  },
  {
    name: "Rodi",
    language: "Satata"
  },
  {
    name: "Teddy",
    language: "Basata"
  }
]

function fetchData(callback) {
  
  console.log("Loading...")

  setTimeout(() => {
    console.log("data fetched Successfully")
    const data = api.find(person => person.name === "Mubarak");
    callback(data)
  }, 5000);
}

function personLanguage(data) {
  console.log(data.language);
}

fetchData(personLanguage);



// PROMISE: A modern way to handle asychronous operations. Representing the eventual completion or failure of an asychronous operation and its resulting value.

function fetchStudents() {
  return new Promise ((resolve, reject) => {

    // Simulate the data fetching

    setTimeout(() => {
      const success = true;
      if (success) {
        const data = api.find(person => person.name === "Chapo");
        resolve(data)
      } else {
        reject(new Error('Failed to get the Data'))
      }
    }, 5000)
  })
}

// Using the fetchStudents function with promise

fetchStudents().then((data) => {
  console.log(data.language);
}).catch((error) => {
  console.error("Name does not Exists", error)
})


// ASYNC & AWAIT - Async and Awaits in Javascript is used to simplify handling asynchronous operations using promises

async function myFunction() {
  const text = "Hello";
  return text;
}
console.log(myFunction());

const fetchInfo = async() => {
  let y = await "OG is an OG";
  return y;
}
fetchInfo();
console.log(1);
console.log(2);
console.log(3);


function opera_method() {
  let first_promise = new Promise((resolve) => resolve("Hello"));
  let second_promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("GeeksforGeeks...")
    }, 5000);
  });
  let combined_promise = Promise.all([first_promise, second_promise]);
  return combined_promise;
}

async function display() {
  let data = await opera_method();
  console.log(data);
}

display();