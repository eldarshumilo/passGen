let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let arr5 = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~']

document.getElementById("option1").oninput = function () {
    document.getElementById("password-length").innerHTML= this.value
}


document.getElementById("generator").onclick = passGenerate

function passGenerate() {
    let  res = []
    if (document.getElementById("option1").value < 10) {
        alert("Password less than 10 characters is insecure")
    }
    if (document.getElementById("option2").checked) {
        res = res.concat(arr2)
    }
    if (document.getElementById("option3").checked) {
        res = res.concat(arr3)
    }
    if (document.getElementById("option4").checked) {
        res = res.concat(arr4)
    }
    if (document.getElementById("option5").checked) {
        res = res.concat(arr5)
    }

    res.sort(compareRandom)
    document.getElementById("out").innerHTML= "" 
    for (let k=0; k<6; k++){
        let out = ''
        let passLength = document.getElementById("option1").value
        for (let i=0; i<passLength; i++) {
            out+= res[randomInteger(0, res.length-1)]
        }
        document.getElementById("out").innerHTML += "<p>"+out+"</p>" 
    }
}

function compareRandom(a, b) {
    return Math.random() - 0.5
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }