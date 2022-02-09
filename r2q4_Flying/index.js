function extractFormInfo()
{
  let firstName = document.querySelector("#firstName").value

  let lastName = document.querySelector("#lastName").value
  
  let ticketClass = document.querySelector(".ticketClass:checked").value
  
  let options = []
  for (i of document.querySelectorAll(".options")){
    if (i.checked) {
      options.push(i.value)
    }
  }

  return {firstName, lastName, ticketClass, options}
}

document.querySelector("#button").addEventListener("click", function(){
  let data = extractFormInfo()
  summary = document.querySelector("#summary")

  pFirstName = document.createElement("p")
  pFirstName.innerText = "First Name: " + data.firstName
  summary.appendChild(pFirstName)

  pLastName = document.createElement("p")
  pLastName.innerText = "Last Name: " + data.lastName
  summary.appendChild(pLastName)

  pTicketClass = document.createElement("p")
  pTicketClass.innerText = "Ticket Class: " + data.ticketClass
  summary.appendChild(pTicketClass)

  pOptions = document.createElement("p")
  pOptions.innerText = "Options: "
  for (i of data.options) {
    pOptions.innerText += i + "  "
  }
  summary.appendChild(pOptions)

  cost = 0
  if (data.ticketClass == "First Class") {
    cost += 1200
  } else if (data.ticketClass == "Business Class") {
    cost += 750
  } else {cost += 250}
  cost += 10 * data.options.length
  pPrice = document.createElement("p")
  pOptions.innerText = "Price: $" + cost


})