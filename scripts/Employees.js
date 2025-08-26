import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

export const handleEmployeeClick = (e) => {
    const target = e.target
    
    if (target.dataset.type === "employee") {
        const id = Number(target.dataset.id)
        const orders = getOrders();

        const count = orders.filter(order => order.employeeId === id).length

        window.alert(`${target.textContent} sold ${count} products`)

    }

}

