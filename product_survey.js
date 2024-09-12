

const myForm = document.getElementById("myForm");
const allInputs = myForm.querySelectorAll("input, select, textarea");

// console.log(allInputs);

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(){
    event.preventDefault();
    // console.log(allInputs[0]);
    const infoDiv = document.getElementById("userInfo");
    infoDiv.setAttribute("style", "display: true;");

    const allP = infoDiv.getElementsByTagName("span");

    // console.log(allP[0]);

    for (let i = 0; i < allP.length; i++) {
        allP[i].innerHTML = allInputs[i].value;
        
    }

}
