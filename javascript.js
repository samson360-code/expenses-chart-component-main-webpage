let spend = document.querySelectorAll(".spend");
let prices = Array.from(document.querySelectorAll(".price"));
let height = prices.map(price => Number(price.innerHTML.replace("$", '')));
spend.forEach((element, index) => {
    element.style.height = 2 * height[index] + "%";
});
let day = new Date(),
    currentDay = day.getDay();
spend[currentDay].style.backgroundColor = " hsl(186, 34%, 60%)";
console.log(spend[currentDay]);
spend[currentDay].addEventListener("mouseover", function(){ 
        spend[currentDay].style.backgroundColor = "hsl(186, 100%, 79%)"; 
});

