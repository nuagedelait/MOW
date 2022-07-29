export default {
    subscribe: (form) => {
        return new Promise( (resolve,reject) => {
            fetch('/api/newsletter',{
                method: "POST",
                body: JSON.stringify({
                    email: form.elements.email.value
                })
            })
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            })
        })
    }
}