let outputscreen = document.getElementById("output-screen");


function display(num){
    outputscreen.value += num;
}

function Calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("Invalid Details")
    }
}

function Clear(){
    outputscreen.value = "";
}

function Delete(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}