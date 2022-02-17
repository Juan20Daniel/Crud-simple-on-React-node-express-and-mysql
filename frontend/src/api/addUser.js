const url = "http://localhost:3001/api/add-client";

export function addUser(data) {
    return fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err);
    });
}