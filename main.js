const URL = ' http://localhost:4444/users';
const URL1 = 'http://localhost:4444/users/2';
const URL2 = 'http://localhost:4444/users/3';

const send = document.getElementById('send');
const refactor = document.getElementById('refactor');
const delet = document.getElementById('delete');

const searchName = document.getElementById('name');
const searchUser = document.getElementById('username');
const searchEmail = document.getElementById('email');

const create = () => {
    const data = {
        name: searchName.value,
        username: searchUser.value,
        email: searchEmail.value
    }
    let option = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, option).then(response => response.json())
}
send.addEventListener('click', create)

const change = () => {
    const data = {
        name: searchName.value,
        username: searchUser.value,
        email: searchEmail.value
    }
    let option = {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL1, option).then(response => response.json())
}
refactor.addEventListener('click', change)

const del = () => {
    const data = {
        name: searchName.value,
        username: searchUser.value,
        email: searchEmail.value
    }
    let option = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL2, option).then(response => response.json())
}
delet.addEventListener('click', del)