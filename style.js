// buat validasi : ambil element -> ambil value -> lakuin validasi -> error -> alert

var username = document.getElementById("username")
var submitButton = document.getElementById("button_submit")
var email = document.getElementById("email")
var password = document.getElementById("password")
var age = document.getElementById("age")
var country = document.getElementById("country")
var male = document.getElementById("male")
var female = document.getElementById("female")
var agreement = document.getElementById("agreement")
// add event listener onclick
submitButton.addEventListener("click", validationForm)

// fungsi validasi

function validationForm(e){
    // var usernameValue = document.getElementById("username").Value
    let usernameValue = username.value
    let emailValue = email.value
    let passwordValue = password.value
    let ageValue = age.value
    let countryValue = country.value
    let maleValue = male.checked
    let femaleValue = female.checked
    let agreementValue = agreement.checked

    if(usernameValue.length < 5){
        alert("Username must be more than 5 characters")
        e.preventDefault()
    }else if(emailValue.endsWith("@gmail.com") == false){
        alert("Email must be ends with @gmail.com")
        e.preventDefault()
    }else if(checkAlphaNumberic(passwordValue) == false){
        alert("Password must be alphanumeric")
        e.preventDefault()
    }else if(ageValue < 5){
        alert("Age must be 5 or greater than 5")
        e.preventDefault()
    }else if(countryValue == ""){
        alert("Country must be selected")
        e.preventDefault()
    }else if(maleValue == false && femaleValue == false){
        alert("Gender must be selected")
        e.preventDefault()
    }else if(agreementValue == false){
        alert("U MUST BE AGREE FOOL")
        e.preventDefault()
    }

}

function checkAlphaNumberic(password){
    let checkNumber = false
    let checkAlphabet = false
    
    for (let i = 0; i < password.length; i++) {
        const element = password[i];
        
        // kalo ketemu angka cekNumber true
        // kalo ketemu alphabet cekAlphabet true

        // check jika ketemu angka
        // isNaN ngecek apa dia angka ato bukan
        // return TRUE kalo bukan angka
        if(isNaN(element) === false){
            checkNumber = true
        }else if((element >= 'A' && element <= 'Z') || (element >= 'a' && element <= 'z')){
        // check jika bukan angka 
            checkAlphabet = true
        }

        if(checkNumber == true && checkAlphabet == true){
            return true
        }
    }
    return false
}