
var netOperator ={
    postEndPoint:()=>{
        fetch("https://mywebsite.com/endpoint/", {
            method:'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                firstParam:"yourValue",
                secondParam:"yourOtherValue"
            })
        })
    },
    postFormEndPoint:()=>{
        fetch("https://mywebsite.com/endpoint/", {
            method:'POST',
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body:"key1=value1&key2=value2"
        })
    },
}