export default async function putRatings(data) {
    const updateData = JSON.stringify(data);
    const jsonData = await fetch("https://foobar-a352.restdb.io/rest/beers/"+data._id, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "60a3d37fe3b6e02545edaa27",
            "cache-control": "no-cache"
        },
        body: updateData
    })
    const status = jsonData.status;

    return status;
}