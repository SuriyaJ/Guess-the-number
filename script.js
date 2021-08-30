var guess = Math.floor(Math.random() * 100) + 1

function calc() {

    if (document.getElementById('in').value == "") {
        document.getElementById('out').innerHTML = '<h2>enter a value</h2>'
    }
    var n = parseInt(document.getElementById('in').value)
    if (n === guess) {
        document.getElementById('out').innerHTML = '<h2>correct</h2>'
        return
    } else if (n > guess)
        document.getElementById('out').innerHTML = '<h2>guess is smaller than ur number</h2>'
    else
        document.getElementById('out').innerHTML = '<h2>guess is greater than ur number</h2>'
}

function res() {
    document.getElementById('in').value = " ";
}