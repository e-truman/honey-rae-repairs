import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]) // use state returns an array. asslign it to a variable to capture that initial state, and a variable to hold the function of what you are going to do to modify state. function accepts the value of the array later in code
    const [totalCustomerMessage, updateMessage] = useState("") //watches specific state variables. takes a single argument. why a string and not an array? because it's just a message so it's imitial value is a blank string


    // after you declare the initial state, you have to go get it. takes two arguments. a function and an array. sole purpose is to run code when certain state changes. it is like an event listener
    useEffect(
        () => {
            fetch("http://localhost:8088/customers") // doing a fetch because you are getting the application state of customers
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data) // net to invoke set customers to put state in the array of customers. can not directly modify state. need to use the function you declasred. the argument is what you want the state to be
                })
        },
        [] // leave empty because we only want to run this code the first time the component is rendered
    )

    useEffect(
        () => {

        },
        [customers]
    )

    useEffect(
        ()=> {
            if (customers.length === 1){
                updateMessage("You have 1 customer")
            }
            else{
                updateMessage(`You have ${customers.length} customers`) // function that updates the variable of totalCustomerMessage
            }
        },
        [customers] // when the state of this array changes, you invoke updateMessage
    )
    return (
        <> 
            <h2>Customers</h2>
            <div>{totalCustomerMessage}</div> 
            {
                customers.slice(0,5).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}



// can only return one element from jsx, but you can take all the code and put it in a single element. the fragment lets you do this

// updateMessage was connected to this variable. here is where you can display the results of the useEffect function you instantiated