const container = document.querySelector(".container");
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      signIn = document.querySelector(".login-link");


 




        pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
        })


        signUp.addEventListener("click", ( )=>{
            container.classList.add("active");
        });
        signIn.addEventListener("click", ( )=>{
        container.classList.remove("active");
        });

    

class Person {
    constructor(user,email, password) {
        this.user=user;
        this.email = email;
        this.password = password;
    } 
}



let people = [];//Array

//function for registration
function register() {
    //declare and assign
    let user = document.querySelector("#user").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("pwd").value;
    let pwd2 = document.getElementById("pwd2").value;

    //validate
    //check if inputs are not empty
    if (user === "" ||email==="" || pwd === "" || pwd2 === "") {
        //error
        alert("fill up all the fields");
    } else {
        //next part of validation
        //check if user is already registered
        let flag = false;
        
        for (let i = 0; i < people.length; i++) {
            if(people[i].email=== email) {
                //error
                flag = true;
                break;
                
            }
        }

        if (flag) {
            alert("You are already registered");
        } else {
            //good to go
            //check if password match
            if(pwd === pwd2) {
                //good to go
                let newPerson = new Person(user,email,pwd);
                people.push(newPerson);
                 alert(user + " registered successfully!");
            } else {
                //error
                alert("Your Passwords don't match!")
            }
        }
    }
}

//function to login
let login = () => {
    
    let email_i = document.querySelector("#email_i").value;
    let pwd_i = document.querySelector("#pwd_i").value;

    ///validation
    if (email_i === "" || pwd_i === "") {
        //bad
        alert("Fields can't be empty");
    } else {
        //good
       let flag = false;
        let person;
        for (let i = 0; i < people.length; i++) {
            if(people[i].email === email_i ) {
                flag = true;
                person = people[i];
               break;

            }
        }
        if(flag) {
            //good
            if (pwd_i === person.password) {
                //good to go
                location.href = "OnlineBookStore.html";

            } else {
                //bad
                alert("Incorrect password!");
            }
        } else {
            //bad
            alert("You are not a member!");
        }
    }
}

            
        







