export async function getRestApiData() {
    const res = await fetch(`http://127.0.0.1:8081/getproduct`)
    return res.json()
}
