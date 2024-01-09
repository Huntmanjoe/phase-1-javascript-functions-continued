// code your solution here

function saturdayFun(roller = "roller-skate") {
    return `This Saturday, I want to ${roller}!`
}

function mondayWork(office = "go to the office") {
    return `This Monday, I will ${office}.`
}

function wrapAdjective(name) {
    return function(special = "special") {
        return `You are ${name}${special}${name}!`
    } 
}
