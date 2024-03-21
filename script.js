const data = [
    {
        username: "raj" ,
        password: "raj"
    },
    {
        username: "daivik" ,
        password: "daivik"
    },
    {
        username: "akshat" ,
        password: "akshat"
    },
    {
        username: "msd" ,
        password: "msd"
    },
    {
        username: "india" ,
        password: "india"
    },
]

function submit(){
    let username = document.getElementById("uname").value ;
    let password = document.getElementById("pword").value ;

    // let user = data.find(user => user.username === username && user.password === password) ;
    let user ;
    data.forEach(ele => {
        if(username === ele.username){
            if(password === ele.password) {
                user = true ;
            }
            else user = false ;
        }
    })

    if(user){
        alert("Welcome, " + username) ;
        clear(username , password) ;
    }
    else {
        alert("Wrong username or password . Please try again.") ;
        clear() ;
    }
}

function clear(username , password){
    username.value = "" ;
    password.value = "" ;
}