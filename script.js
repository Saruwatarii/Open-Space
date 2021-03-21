document.addEventListener("DOMContentLoaded", function (event) {
  // Elements from the HTML
  const checkBox = document.getElementsByClassName("checking");
  const rangeLever = document.getElementsByClassName("slider");
  const launchBtn = document.getElementById("btn");
  const passBtn = document.getElementById("pwBtn");
  const inputPass = document.getElementById("inputer");
  let rocketShip = document.getElementById("rocket");

  // Variables
  const PASSWORD = "1";
  const CHECKBOX = 6;

  const LEVER = 5;

  let everyTime;
  let allCheckBoxes = false;
  let allMaxLevers = false;

  passBtn.addEventListener("click", checkPass);
  launchBtn.addEventListener("click", launching);

  // Disabling the checkbuttons,levers and the launch button by default
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].disabled = true;
  }
  for (let i = 0; i < rangeLever.length; i++) {
    rangeLever[i].disabled = true;
  }
  launchBtn.disabled = true;

  // Enable the input(checkboxes and levers)  if the password is correct
  function checkPass() {
    if (PASSWORD === inputPass.value) {
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].disabled = false;
      }
      for (let i = 0; i < rangeLever.length; i++) {
        rangeLever[i].disabled = false;
      }
    }
    checkingLeversAndCheckBoxes();
    //  timeChecker();
  }

  // Check if all levers are maxed and all check boxes are checked out. If yes, then Enable the launch button.
  function checkingLeversAndCheckBoxes() {
    let checkedBox = 0;
    let leverMax = 0;

    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
          checkedBox++;
          //  console.log(checkedBox);
        } else {
          checkedBox--;
          //  console.log(checkedBox);
        }
        if (checkedBox === CHECKBOX) {
          allCheckBoxes = true;
          //  console.log("Checking please!");
          checker();
        }
      });
    }
    for (let i = 0; i < rangeLever.length; i++) {
      rangeLever[i].addEventListener("change", (event) => {
        if (event.currentTarget.value === rangeLever[i].max) {
          leverMax++;
          //  console.log(event.currentTarget.value);
          //  console.log(leverMax);
        } else {
          leverMax--;

          //  console.log(event.currentTarget.value);
        }
        if (leverMax === LEVER) {
          allMaxLevers = true;
          //  console.log("Lever please!");
          checker();
        }
      });
    }
    /** 
      rangeLever[i].onchange = () => {
        if (rangeLever[i].max === rangeLever[i].value) {
          leverMax++;
          console.log(leverMax);
        }
        */
  }

  function checker() {
    if (allCheckBoxes && allMaxLevers) {
      launchBtn.disabled = false;
      // console.log("Enable?");
    }
  }

  function launching() {
    let id = null;
    let pos = 225;
    clearInterval(id);
    id = setInterval(frame, 10);

    function frame() {
      if (pos === 1600) {
        clearInterval(id);
      } else {
        pos++;
        rocketShip.style.bottom = pos + "px";
        rocketShip.style.left = pos + "px";
      }
    }
  }
});
