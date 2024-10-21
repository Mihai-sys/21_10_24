const baseUrl = "https://jsonplaceholder.typeicode.com";
const postEndpoint = "/posts";

const submitButton = document.getElementById("form-submit-button");

submitButton.addEventListener("click", async () => {
    const form = document.getElementById("create-post-form");
    const formData = new FormData(form);
    console.log("sending data: ", formData);
    // for(const pair of formData.entries()){
    //     console.log(pair[0], pair[1]);
    // }

    const createPostUrl = baseUrl + postEndpoint;
//     fetch(createPostUrl, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//             "Content-Type" : "aplication/json; charset=UTF-8"
//         }
//     }).then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err));

    try{
        const response = await fetch(createPostUrl,{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type" : "aplication/json; charset=UTF-8"
            }
        })
    
        const data = await response.json();
        console.log("data", data);
    } catch (err){
        console.log("err", err);
    }
    
});

const editButton = document.getElementById("form-edit-button");
const resourceId = 1;

// editButton.addEventListener("click", async() => {
//     const editUrl = baseUrl + postEndpoint + `/${resourceId}`;

//     try{
//         const response = await fetch(editUrl, {
//             method: "PUT",
//             body: JSON.stringify(formData)
//         })
            
//     }
// });
