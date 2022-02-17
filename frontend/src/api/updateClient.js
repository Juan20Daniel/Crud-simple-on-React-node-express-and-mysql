export function lookClient(id) {
    return fetch(`http://localhost:3001/api/look-client/${id}`,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        return data;
    }).catch(error => {
        console.log(error);
    });
}
export function updateClient(id, data) {
    return fetch(`http://localhost:3001/api/update-client/${id}`,{
        method:'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch(error => {
        console.log(error);
    });
}