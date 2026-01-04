// JSON is a lightweight data format commonly
// used for data exchange between client
// and server

let jsonString = '{"name": "Alice", "age": 30, "city": "New York"}'
console.log(jsonString);


let userObject = JSON.parse(jsonString);
console.log(userObject);
console.log(userObject.name);

let person = {
    "name": "Alice",
    "age": 30, 
    "city": "New York"
};
console.log(person);
console.log(JSON.stringify(person));



// The Fetch Api provides a easy way to make
// network requests in javascript.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parse the response body as JSON
  .then(data => console.log(data))    // Handle the parsed data
  .catch(error => console.error('Error:', error)); // Handle network errors

let a = fetch('https://jsonplaceholder.typicode.com/posts/1')
a.then((response) => {
    return response.json;
})
.then((data) => {
    console.log(data);
    
});


// await and async
async function fetchData() {
    try {
        const responsee = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!responsee.ok){
            throw new Error("Network response was not good")
        }

        //console.log(responsee);
        const data = await responsee.json();
        console.log("Fetched Data",data);
    } catch(error) {
        console.log("Error: ", error);
        

    }

}
fetchData();

async function postData() {

    const newPost = {
        title: "New Post",
        body: "Post Body",
        userId: 1
    };

    try {
        const responsee = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if (!responsee.ok){
            throw new Error("Network response was not good")
        }

        //console.log(responsee);
        const data = await responsee.json();
        console.log("Posted Data",data);
    } catch(error) {
        console.log("Error: ", error);
        
    }

}
postData();















// Axios is a powerful HTTP client for making 
//network request in JavaScript.
// `axios.get()` is used to make a GET request
// `axios.post()` is used to make a POST request

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        //console.log("GET: ", response);
        console.log("GET: ", response.data);
        
    })
    .catch(error => console.log("Error", error));

let postDataa = {
    title: "Title Post",
    body: "Body Post"
};

axios.post('https://jsonplaceholder.typicode.com/posts', postDataa)
    .then(response => {
        console.log("POST: ", response.data);
        
    })
    .catch(error => console.log("Error", error));


