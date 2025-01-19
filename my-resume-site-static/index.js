const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://s2bdzgjb5qx4e4qsukjhxj3ghy0mthxe.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views:${data}`;
}

updateCounter();