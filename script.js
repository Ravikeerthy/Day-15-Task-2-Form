var mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "container  blur-background");
mainDiv.setAttribute("id", "main");

document.body.append(mainDiv);

var mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");
// mainContainer.innerHTML = "<h1 style = 'text-align:center'>Form submission</h1>";

// var formGroup = document.createElement("div");
// formGroup.setAttribute("class", "form-group");

var form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "transparent-blur box-shadow");
// mainContainer.append(form);

var heading = document.createElement("h1");
heading.setAttribute("id", "title");
heading.setAttribute("class", "text-center");
heading.innerHTML = "Form Submission";
form.append(heading);

var des = document.createElement("p");
des.setAttribute("id", "description");
des.setAttribute("class", "text-center");
des.innerHTML = "This is My Form Submission Task Using DOM";
form.append(des);

var fName = document.createElement("label");
fName.setAttribute("class", "form-label");
fName.setAttribute("for", "firstname");
fName.innerHTML = "<h3>Enter your First Name</h3>";
form.append(fName);

var fNameInput = document.createElement("input");
fNameInput.setAttribute("class", "form-control");
fNameInput.setAttribute("id", "first-name");
fNameInput.setAttribute("type", "text");
fNameInput.setAttribute("required", true);
fNameInput.setAttribute("placeholder", "Enter your name");
form.append(fNameInput);

// var br = document.createElement("br");
// mainContainer.append(br);

var lName = document.createElement("label");
lName.setAttribute("class", "form-label");
lName.setAttribute("for", "lastname");
lName.innerHTML = "<h3>Enter your Last Name</h3>";
form.append(lName);

var lNameInput = document.createElement("input");
lNameInput.setAttribute("class", "form-control");
lNameInput.setAttribute("type", "text");
lNameInput.setAttribute("id", "last-name");
lNameInput.setAttribute("required", true);
lNameInput.setAttribute("placeholder", "Enter your last name");
form.append(lNameInput);

// var br = document.createElement("br");
// mainContainer.append(br);

var address = document.createElement("label");
address.setAttribute("class", "form-label");
address.setAttribute("for", "address");
address.innerHTML = "<h3>Enter your Address </h3>";
form.append(address);

var addInput = document.createElement("textarea");
addInput.setAttribute("class", "form-control");
addInput.setAttribute("id", "address");
addInput.setAttribute("required", true);
addInput.setAttribute("type", "text");
addInput.setAttribute("placeholder", "Enter the address");

// addInput.innerHTML = `<textarea id="exampleFormControlTextarea1" rows="3"></textarea>`
form.append(addInput);

var pincode = document.createElement("label");
pincode.setAttribute("class", "form-label");
pincode.setAttribute("for", "pincode");
pincode.innerHTML = "<h3>Enter your Pincode </h3>";
form.append(pincode);

var pincodeInput = document.createElement("input");
pincodeInput.setAttribute("class", "form-control");
pincodeInput.setAttribute("id", "pincode");
pincodeInput.setAttribute("type", "text");
pincodeInput.setAttribute("required", true);
pincodeInput.setAttribute("placeholder", "Enter your pincode");
form.append(pincodeInput);

var gender = document.createElement("label");
gender.setAttribute("class", "form-label");
gender.innerHTML = "<h3>Select your Gender</h3>";
form.append(gender);

var genderInput = document.createElement("div");
genderInput.setAttribute("name", "gender");
genderInput.innerHTML = `<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="female" value="female">
<label class="form-check-label" for="female">
  Female
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="gender" id="male" value="male" >
<label class="form-check-label" for="male">
  Male
</label>
</div>`;
genderInput.setAttribute("required", true);
form.append(genderInput);

var foodChoice = document.createElement("label");
foodChoice.setAttribute("class", "form-label");
foodChoice.innerHTML = "<h3>Select your Food choice </h3>";
form.append(foodChoice);

var foodInput = document.createElement("div");
foodInput.setAttribute("id", "choosefood");
foodInput.innerHTML = `<div class="form-check">
<input class="form-check-input" type="checkbox" value="South Indian" id="SouthIndian">
<label class="form-check-label" for="SouthIndian">
  South Indian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="North Indian" id="NorthIndian">
<label class="form-check-label" for="NorthIndian">
  North Indian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Italian" id="Italian">
<label class="form-check-label" for="Italian">
  Italian
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Chinese" id="Chinese">
<label class="form-check-label" for="Chinese">
Chinese
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="Arabian" id="Arabian">
<label class="form-check-label" for="Arabian">
  Arabian
</label>
</div>`;
form.append(foodInput);

var state = document.createElement("label");
state.setAttribute("class", "form-label");
state.innerHTML = "<h3>Enter your State </h3>";
form.append(state);

var stateInput = document.createElement("input");
stateInput.setAttribute("class", "form-control");
stateInput.setAttribute("id", "state");
stateInput.setAttribute("type", "text");
stateInput.setAttribute("required", true);
stateInput.setAttribute("placeholder", "Enter your state");
form.append(stateInput);

var Country = document.createElement("label");
Country.setAttribute("class", "form-label");
Country.setAttribute("id", "country");
Country.innerHTML = "<h3>Enter your Country</h3>";
form.append(Country);

var countryInput = document.createElement("input");
countryInput.setAttribute("class", "form-control");
countryInput.setAttribute("id", "countryname");
countryInput.setAttribute("type", "text");
countryInput.setAttribute("required", true);
countryInput.setAttribute("placeholder", "Enter your country name");
form.append(countryInput);

var button = document.createElement("button");
button.setAttribute("class", "btn btn-primary");
button.setAttribute("id", "submit");
button.setAttribute("type", "submit");
button.addEventListener("click", function (event) {
  event.preventDefault();
  addData();
});
button.innerText = "Submit";
form.append(button);

mainContainer.append(form);
// mainContainer.append(formGroup);


var tableName = document.createElement("div");
tableName.setAttribute("class", "container box-shadow");
tableName.innerHTML = "<h1 style ='text-align:center'>Data Added in Table</h1>";

var tableWrap = document.createElement("div");
tableWrap.setAttribute("class", "table-responsive custom-table")

var table = document.createElement("table");
table.setAttribute("class", "table table-bordered");
table.setAttribute("id", "display");
tableName.append(table);

var thead = document.createElement("thead");
thead.setAttribute("class", "thead");
table.innerHTML = `
<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Pincode</th>
    <th>Gender</th>
    <th>Choice of Food</th>
    <th>State</th>
    <th>Country</th>

</tr>
`;
// tableName.append(thead);

var tbody = document.createElement("tbody");
table.append(thead);
table.append(tbody);
tableWrap.append(table);
tableName.append(tableWrap);
mainContainer.append(tableName);
document.body.append(mainContainer);

// var entry = document.getElementById("entry");
// entry.addEventListener("click", addData);

var row = 1;

function addData() {
  var name1 = document.getElementById("first-name").value;
  var name2 = document.getElementById("last-name").value;
  var contactadd = document.getElementById("address").value;
  var pinnumber = document.getElementById("pincode").value;
  var genders = document.querySelector('input[name="gender"]:checked').value;
  var food = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  )
    .map(function (element) {
      return element.value;
    })
    .join(", ");
  var states = document.getElementById("state").value;
  var countries = document.getElementById("countryname").value;

  // console.log(name1);
  // console.log(name2);

  // if(!name1 && !name2 && !contactadd && !pinnumber && !genders && !food && !states && !countries){
  //     alert("Please fill all the data");
  //     return;
  // }

  var display = document.getElementById("display");

  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  cell1.innerHTML = name1;
  cell2.innerHTML = name2;
  cell3.innerHTML = contactadd;
  cell4.innerHTML = pinnumber;
  cell5.innerHTML = genders;
  cell6.innerHTML = food;
  cell7.innerHTML = states;
  cell8.innerHTML = countries;

  row++;

  form.reset();
  // alert("Your Data is Added in Table");
}
