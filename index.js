let string

function writeCards(str,event){
    let arr = []

    for (let i = 0; i < str.length; i++) {
        arr.push(`Thank you, ${str[i]}, for the wonderful ${event} gift!`)
    }

    return arr
}

function countDown(num){
    let i = num;

    while (i >= 0){
        console.log(i--)
    }
}