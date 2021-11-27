var maxlength = 4;
var totalLength = 16;

function getInput(i) {
       switch (i) {
           case 1:
               return document.getElementById("input1");
           case 2:
               return document.getElementById("input2");
           case 3:
               return document.getElementById("input3");
           case 4:
               return document.getElementById("input4");
       }
   }

   function handleInput(currentInput, elm, e) {
       let str = elm.value;

   
      
       if (str === "" && e.key === "Backspace") {
           getInput(--currentInput).focus();
       }
       for (let i = currentInput; i <= maxlength; i++) {
           if (str.length >= maxlength) {
               getInput(currentInput++).value = str.substr(0, maxlength);
               getInput(currentInput).focus();
               

               str = str.substr(maxlength);
           }

       }

       return count;
   }



   const submit = document.getElementById("submit");



   submit.onclick = () => {
       

       if (document.getElementById("input1").value.length < maxlength || document.getElementById("input4").value.length < maxlength || document.getElementById("input3").value.length < maxlength || document.getElementById("input2").value.length < maxlength) {
           alert("please enter the " + totalength + "digit Card number");
           return

       }
       if (document.getElementById("userName").value == "") {
           alert('please enter the name')
       }

       else {
           let getlocalstorage = localStorage.getItem("to do");
           if (getlocalstorage == null)
               array = []
           else
               array = JSON.parse(getlocalstorage);
           let newElm = {
               displayName: document.getElementById("userName").value,
               display1: document.getElementById("input1").value,
               display2: document.getElementById("input2").value,
               display3: document.getElementById("input3").value,
               display4: document.getElementById("input4").value,
               card: document.querySelector('input[name="optional"]:checked').value,

           }
           array.push(newElm);

           localStorage.setItem("to do", JSON.stringify(array));
           renderAll();
       }
   }

   function renderAll() {
       let getlocalstorage = localStorage.getItem("to do");
       if (getlocalstorage == null)
           var array = [];
       else
           array = JSON.parse(getlocalstorage);
       let empty = '';
       array.forEach((elm, index) => {
           if (elm.card === "visa") {
               console.log("sds");
               empty += ` <div>
           <div class="container3">
               <div class="chip"></div>
               <div class="card visa">VISA</div>
                 <div class="details">
                 <div id="displayName">${elm.displayName}</div>
                 <span id="display1">${elm.display1}</span>
                 <span id="display2">${elm.display2}</span>
                 <span id="display3">${elm.display3}</span>
                 <span id="display4">${elm.display4}</span>
             </div>
              <div class="circle1"></div>
              <div class="circle2"></div>
            </div>
          </div><div id="delete" onclick="deleteCard(${index})">delete card</div>
          `
           }
           else {
               empty += ` <div>
           <div class="container4">
               <div class="chip"></div>
               <div class="card mastercard">MasterCard</div>
                 <div class="details">
                 <div id="displayName">${elm.displayName}</div>
                 <span id="display1">${elm.display1}</span>
                 <span id="display2">${elm.display2}</span>
                 <span id="display3">${elm.display3}</span>
                 <span id="display4">${elm.display4}</span>
             </div>
              <div class="circle1"></div>
              <div class="circle2"></div>
            </div>
          </div><div id="delete" onclick="deleteCard(${index})">delete card</div>
          `
           }

       })
       document.querySelector(".list").innerHTML = empty;
       document.getElementById("userName").value = "";
       document.getElementById("input1").value = ""
       document.getElementById("input2").value = "";
       document.getElementById("input3").value = "";
       document.getElementById("input4").value = "";
   }
   renderAll();
   function deleteCard(index) {

       let getlocalstorage = localStorage.getItem("to do");
       array = JSON.parse(getlocalstorage);
       array.splice(index, 1);
       localStorage.setItem("to do", JSON.stringify(array));
       renderAll();
   }

   function onlyKeyNumber(evt) {


       var ASCIICode = (evt.which) ? evt.which : evt.keyCode
       if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
           return false;
       return true;
   }