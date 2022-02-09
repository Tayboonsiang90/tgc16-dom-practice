dataCollection = function (){
    firstName = document.querySelector("#firstName").value
    lastName = document.querySelector("#lastName").value
    if (local == 0) {
        address = document.querySelector("#hotel").value
    } else {
        address = document.querySelector("#postal").value
    }

    return {firstName, lastName, address}
}

local = 0
radios = document.getElementsByName("radio")
for (i of radios) {
    i.addEventListener("click", function(){
        if (this.value == "local") {
            document.querySelector("#for-locals").style.display = "block"
            local = 1
        } else {
            document.querySelector("#for-tourists").style.display = "block"
        }
    })
}

signUp = document.querySelector("#signUp")
signUp.addEventListener("click", function() {
    data = dataCollection()
    result = document.querySelector("#result")
    pFirstName = document.createElement("p")
    pFirstName.innerText = "First Name: " + data.firstName
    result.appendChild(pFirstName)
    pLastName = document.createElement("p")
    pLastName.innerText = "Last Name: " + data.lastName
    result.appendChild(pLastName)
    pAddress = document.createElement("p")
    pAddress.innerText =  "Address: " + data.address
    result.appendChild(pAddress)
})

