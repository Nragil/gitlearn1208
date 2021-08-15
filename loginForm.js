class User {
    constructor (username, password, email, role) {
        this.username = username
        this.password = password
        this.email = email
        this.role = role
    }

} 

let users = [
    new User('ragil', 1234, 'ragil@mail.com', 'user'),
    new User('admin', 'pass','admin@mail.me', 'admin'),
    new User('asep', 1234, 'asep.sunandar@gmail.com', 'user')

]

// const username = document.getElementById('username').value
// const pass = document.getElementById('password').value


const onClickSubmit = () => {
    const username = document.getElementById('username').value
    const pass = document.getElementById('password').value

    let checkUser = users.filter((val) => val.username == username && val.password == pass)

        if (checkUser.length) {
            console.log(`Logged In`)
        } else {
            console.log(`Username atau Password salah!`)
        }
        document.getElementById('username').value=''
        document.getElementById('password').value=''
}

//Register

const onClickRegis = () => {
    const username = document.getElementById('regUsername').value
    const pass = document.getElementById('regPassword').value
    const email = document.getElementById('email').value

    let checkUser = users.filter((val) => val.username == username || val.email === email)

        if (checkUser.length) {
            console.log(`Username atau Email sudah pernah terdaftar!`)
        } else {
            let nUser = new User(username, pass, email, 'user')
            users.push(nUser)
            console.log(users)
            
        }
        document.getElementById('regUsername').value=''
        document.getElementById('regPassword').value=''
        document.getElementById('email').value=''
}