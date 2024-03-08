const km = prompt('ciao, Quanti chilometri desideri percorrere?') //string - null

const age = prompt('quanti anni hai?') //string - null
console.log ('perfetto, hai :' + +age ) //number
console.log ('e vuoi percorrere :' + +km + 'km' ) //number

const price = 0.21 //string - null
console.log ('prezzo per km ' + price) // number

const userprice = price * +km //number
console.log ('prezzo iniziale ' + userprice) //number

const sconto20 = (userprice * 0.2 / 1)

const sconto40 = (userprice * 0.4 / 1)

if (age <= 18) {
    console.log ( sconto20 - userprice)
}

else if ( age >= 65) {
    console.log ( sconto40 - userprice)
}

else {
    console.log (+userprice)
}


// const passward = name + secondname + color + randomfloat //string
// console.log ('la tua passward è :' + passward)

    
