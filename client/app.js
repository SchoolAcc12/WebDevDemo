
function fetchUsers() {
    fetch('http://localhost:5000/users')           
    .then(response => response.text())
    .then(data => console.log(data));
}


// test commit
