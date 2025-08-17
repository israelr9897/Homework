async function client(Temp, Speed) {
    const response = await fetch("http://localhost:4000/check-weathe", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            temp: Temp,
            speed: Speed
        })
    })
    console.log(await response.json());

}

client(-2,45)