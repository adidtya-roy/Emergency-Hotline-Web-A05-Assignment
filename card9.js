// Card 9 Feature
// love Click Featur 
document.getElementById("love-btn9").addEventListener("click" , function(e){
    e.preventDefault;

    const hard9 = parseInt(document.getElementById("hardBtn").innerText);

    const hardClickBTN9 = hard9 + 1;
    document.getElementById("hardBtn").innerText = hardClickBTN9;


})

// Call Click and cart coin and History feature
const history9 = document.getElementById("historyCard");
const coin9 = document.getElementById("coin");
document.getElementById("CallBtn9").addEventListener("click", function(e) {
    e.preventDefault(); 
    
    let call9 = parseInt(coin9.innerText);

    if (call9 >= 20) {
        call9 -= 20; 
        coin9.innerText = call9;
        alert("📞Bangladesh Railway Helpline 163..");
    } else if (call9 > 0 && call9 < 20) {
        alert("⚠️ You don't have enough coins. You need at least 20 coins to make a call.");
    } else if (call9 === 0) {
        alert("⚠️ You have 0 coins. Please add more coins to make a call.");
    }


    // This code will no longer produce negative currency
    if (call9 < 0) {
        call9 = 0;
        coin9.innerText = call9;
    }

    // history feature
        // history Create
        const entryDiv9 = document.createElement("div");
        entryDiv9.classList.add("history-entry");


        const now9 = new Date();
        const dateTime9 = now9.toLocaleTimeString();

        entryDiv9.innerHTML = 
            `<div class="flex gap-5 text-sm font-bold bg-gray-100 p-3 rounded-xl mb-5">
                <div> Brac Helpline </br> 16445 </div> 
                <div class="time"> ${dateTime9}</div>
            </div>`;

        history.appendChild(entryDiv9);

});


// Coppy feature
document.getElementById("coppy-Btn9").addEventListener("click" , function(e){
    e.preventDefault();
    

    const Coppy9 = parseInt(document.getElementById("Coppy").innerText);

    const clickCoppyBtn9 = Coppy9 + 1 ;
    document.getElementById("Coppy").innerText = clickCoppyBtn9;



// number coppy Feature
    const text = document.getElementById("Number9").innerText;

     navigator.clipboard.writeText(text)
        .then(() => {
            alert("✅ Number copied: " + text);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

})