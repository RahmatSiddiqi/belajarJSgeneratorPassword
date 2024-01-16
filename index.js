let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(even) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_-=+{}[]:;'/?.,<>`~"

    const data = numeric + lowerAlphabet + upperAlphabet + symbol
    let generator = '';
    for (let index = 0; index < even; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value)
    // console.log('generator: ', newPassword);

    password.value = newPassword
    // alert("Password has been generated")
}

function savePassword() {

    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`passwordsaya: ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGenerate.txt')
    // console.log(saveButton)
    // alert('password has been saved')
}