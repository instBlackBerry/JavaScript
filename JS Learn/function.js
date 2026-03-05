let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}
sum(a, b)
a = 8
b = 12
sum(a, b)

//смотрим структуру функции как объекта
function myFn /*имя*/(a, b)/*параметры функции*/ {
    let c
    a = a + 1
    c = a + b                   //тело функции
    return c
}
let rew = myFn(10, 3)
console.log(rew)

