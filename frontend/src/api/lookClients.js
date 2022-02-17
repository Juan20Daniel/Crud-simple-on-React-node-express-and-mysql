const url = "http://localhost:3001/api/look-clients";

export function lookClients() {
    return fetch(url,{
        method:'GET',
        headers:{
            "Content-Type":'application/json'
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    });
}