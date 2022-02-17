export function deleteClientAPi(id) {
    return fetch(`http://localhost:3001/api/delete-client/${id}`,{
        method:'DELETE',
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch(err => {
        console.log(err.message);
    });
}