
var health = 100;
var hits = 0
//global ^

function slap() {
    health--
    hits++
    // console.log(health, hits)
    update()
}

function punch() {
    //for loop
    for (let i = 0; i <= 0; i += 5) {
        const element = punch[i];
        health -= 5
        hits++
        // console.log("Punch " + health, hits)
        update()

    }
}

function kick() {
    //for loop i, arr, ellem
    for (let i = 0; i <= 0; i += 10) {
        const element = kick[i];
        health -= 10
        hits++
        // console.log("Kick " + health, hits)
        update()
    }
}

function kamehameha() {
    //for loop i, arr, ellem
    for (let i = 0; i <= 0; i += 9100) {
        const element = kick[i];
        health -= 9100
        hits++
        // console.log("kamehameha! " + health, hits)
        update()
    }
}


function update() {
    document.getElementById("health").innerHTML = health
    document.getElementById("hits").innerHTML = hits
    // for (let i = 0; i < array.length; i++) {
    // const element = array[i];
}
update()

// Psuedo Code
// 5
// add other buttons CHECK
//

