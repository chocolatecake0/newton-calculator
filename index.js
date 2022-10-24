let equation
let number
let iteration
let answer
let allAnswers = []

let getEquation = () => {
    equation = document.getElementById("equation").value
}
let getNumber = () => {
    number = document.getElementById("number").value
}
let getIterationAmount = () => {
    iteration = document.getElementById("iteration").value
} 
let getAll = () => {
    allAnswers = []
    getEquation()
    getNumber()
    getIterationAmount()
    eq()
    graph()
    allAnswers.map((x, index) => result(x, index))
}
let eq = () => {
    let eq = math.evaluate(equation, {x:number})
    let derivative = math.derivative(equation, "x").evaluate({x:number})
    answer = number-eq/derivative
    allAnswers.push(answer)
    for(let i= 1; i<iteration;i++){
        number = answer
        eq = math.evaluate(equation, {x:number}) 
        derivative = math.derivative(equation, "x").evaluate({x:number})
        answer = number-eq/derivative
        allAnswers.push(answer)         
    } 
}


let result = (x, index) => {
    let p = document.createElement("p")
    let content = document.createTextNode(`${index+1}. result is equal to ${x}`)
    p.appendChild(content)
    let resultDiv = document.getElementById("allAnswers")
    resultDiv.appendChild(p) 
}

