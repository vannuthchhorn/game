var khmerGame = () => {
    let mix1 = Math.floor(Math.random() * 6) + 1;
    let mix2 = Math.floor(Math.random() * 6) + 1;
    let mix3 = Math.floor(Math.random() * 6) + 1;
    let output1 = "";
    let output2 = "";
    let output3 = "";

    switch (mix1) {
        case 1:
            output1 = "<img src='images/1.PNG' style='width:100px;'>";
            break;
        case 2:
            output1 = "<img src='images/2.PNG' style='width:100px;'>";
            break;
        case 3: 
            output1 = "<img src='images/3.PNG' style='width:100px;'>";
            break;
        case 4:
            output1 = "<img src='images/4.PNG' style='width:100px;'>";
            break;
        case 5:
            output1 = "<img src='images/5.PNG' style='width:100px;'>";
            break;
        case 6:
            output1 = "<img src='images/6.PNG' style='width:100px;'>";
            break;
    }
    switch (mix2) {
        case 1:
            output2 = "<img src='images/1.PNG' style='width:100px;'>";
            break;
        case 2:
            output2 = "<img src='images/2.PNG' style='width:100px;'>";
            break;
        case 3:
            output2 = "<img src='images/3.PNG' style='width:100px;'>";
            break;
        case 4:
            output2 = "<img src='images/4.PNG' style='width:100px;'>";
            break;
        case 5:
            output2 = "<img src='images/5.PNG' style='width:100px;'>";
            break;
        case 6:
            output2 = "<img src='images/6.PNG' style='width:100px;'>";
            break;
    }
    switch (mix3) {
        case 1:
            output3 = "<img src='images/1.PNG' style='width:100px;'>";
            break;
        case 2:
            output3 = "<img src='images/2.PNG' style='width:100px;'>";
            break;
        case 3:
            output3 = "<img src='images/3.PNG' style='width:100px;'>";
            break;
        case 4:
            output3 = "<img src='images/4.PNG' style='width:100px;'>";
            break;
        case 5:
            output3 = "<img src='images/5.PNG' style='width:100px;'>";
            break;
        case 6:
            output3 = "<img src='images/6.PNG' style='width:100px;'>";
            break;
    }
    let result = document.getElementById("result");
    if (result.innerHTML != "") {
        let result = document.getElementById("result");
        result.innerHTML = "Waiting...";
    }

    setTimeout(() => {
        result.innerHTML = output1 + output2 + output3;
    }, 2000);

    if (result.innerHTML == "") {
        let result = document.getElementById("result");
        result.innerHTML = "Waiting...";
    }


}


// Play
var playGame = document.querySelector("#play");
playGame.addEventListener('click', khmerGame);