const url= 'https://jsonplaceholder.typicode.com/users';
const ul= document.querySelector('#persons-list')

const getUsers= async () => {
    const response = await fetch (url);
    if (!response.ok) {
        const message = 'An error has occured. Status: ${response.status}';
        throw new Error (message);
    }
    const data = await response.json();
    return data;
};

getUsers()
.then(data => console.log ('Resolved: ', data))

let users= data;

users.map(user =>{
    let li= document.createElement('li');
    let name= document.createElement('h2');
    let email= document.createElement('span');

    name.textContent= '${user.name}';
    email.textContent= '${user.email}';

    li.appendChild(name);
    li.appendChild(email);
    ul.appendChild(li);
});