import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeesFromAPI) => {
                    changeEmployee(employeesFromAPI)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialities = employees.map(emp => emp.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [employees])

    return (
        <>
            <button onClick={() => history.push("/employee/hire")}>Hire Employee</button>
            <h2>Employees</h2>
            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`} >{employee.name}</Link></p> // every element needs a unique key. serves same purpose as an id attributeused for the rendering of the dom so it knows which element is which
                    }
                )
            }
        </>
    )
}


