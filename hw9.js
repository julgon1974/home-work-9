

targil 2

const printMyname = () => {
    alert("yael gluzberg")
}

const x = (clb) => {
    clb()
}
x(printMyname)

targil 3

function cool(callback) {
    callback();
}

const randomNum = () => {
    let numRand = Math.floor(Math.random() * 100);
    document.write(numRand)
}
cool(randomNum)

targil 4

function nice(callback) {
    callback(x);
}

const randomNum = () => {
    let argumentNum = 42;
    document.write(argumentNum)
} 
nice(randomNum(randomNum))

targil 5

function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    document.write("Num:" + num);
}


const fiveNum = (a, b, c, d, e) => {

    let arrNum = [a,b,c,d,e]

    let x = arrNum[Math.floor(Math.random() * arrNum.length)]
    return  x
}

amazing(fiveNum)


targil 6

function cool(paintCallback) {
    paintCallback();
}

const paintBcgd = () => {

    let x = Math.floor(Math.random() * 256);
   let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;

}
cool(paintBcgd)

targil 7
function nice(paintCallback) {
    paintCallback("Green");
}

const paintBcgd = (x) => {
    document.body.style.background = x;
}

nice(paintBcgd)

targil 8
function amazing(paintCallback) {
    const paintedColor = paintCallback("Red", "Green", "Blue");
    document.write("Painted Color: " + paintedColor);
}

const threeCol = (a, b, c) => {
    let arrCol = [a, b, c]

    let x = arrCol[Math.floor(Math.random() * arrCol.length)]
   document.body.style.background = x;

    return  x

}

amazing(threeCol)

targil 9


let num = setInterval(ranNum, 1000);

function ranNum() {
    document.getElementById("pNum").innerHTML = Math.floor(Math.random() * 100);
}

function myStopFunction() {
    clearInterval(num);
}

           