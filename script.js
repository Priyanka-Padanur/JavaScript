const numOneRef = document.getElementById("numOne");
const numTwoRef = document.getElementById("numTwo");

const addHandler = () => {
    document.getElementById("result").innerText = parseInt(numOneRef.value) + parseInt(numTwoRef.value);
}; 