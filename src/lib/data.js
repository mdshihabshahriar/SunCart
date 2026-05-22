export async function getProducts(){
    const res = await fetch("https://suncart-server-leth.onrender.com/products")
    const data = await res.json()
    return data
}

export async function getProductDetailsById(product_id) {
    const res = await fetch(`https://suncart-server-leth.onrender.com/products/${product_id}`);
    const data = await res.json();
    return data;
}