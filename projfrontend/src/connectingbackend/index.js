

export const showContent=author=>{
    return fetch(`${API}authors`,{
        method:"GET",
    }).then(response=>{
       return response.json()})
    .catch(err=>console.log(err))
}

export default showContent;