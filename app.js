var initialPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");

var submitBtn=document.querySelector("#submit-btn");

var outputBox=document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler)

function submitHandler(){
    var ip=Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial,quantity,current){
    if (current>initial) {
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;

        showOutput(`:) YAAAAAYYYYY!!! Profit Incurred: ${profit} with a whooping ${profitPercentage}% ` );
    }
    else if (initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;

        showOutput(`:( Loss Incurred: ${loss} with a drooping ${lossPercentage}% `);
    } else {
        showOutput("In the words of world famous Neograd 👴🏻 \"No pain no gain and no gain no pain\"");
    }
}

function showOutput(msg){
 outputBox.innerText=msg;
}