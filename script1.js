const colorChanger = document.getElementsByTagName("button")[0];
colorChanger.addEventListener("click",function() {
  document.querySelector('p').style.color = "blue";  
});







// const PriceRef = document.getElementById("Price");
// const PersonRef = document.getElementById("Person");
// // const ItrRef = document.getElementById("Interest Rate");

// const addHandler = () => {
//     const Price = parseInt(PriceRef.value);
//     const Person = parseInt(PersonRef.value);
//     // const R = parseInt(ItrRef.value);
//     const Total = Price / Person ;

//     document.getElementById("res").innerText = "Total Price = " + Total;



//     //  const sum= parseInt(OneRef.value) + parseInt(TwoRef.value) + parseInt(ThreeRef.value);
//     //  document.getElementById("res").innerText = "The sum of " + sum;
// }; 