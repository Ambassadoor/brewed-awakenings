import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-price="${product.price}" data-type="product">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

export const handleProductClick = (e) => {
    const target = e.target

    if (target.dataset.type === "product") {
        const price = Number(target.dataset.price).toFixed(2)
        const name = target.textContent

        window.alert(`${name} costs\n$${price}`)
    }
}

