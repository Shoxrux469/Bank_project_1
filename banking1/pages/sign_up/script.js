let form = document.forms.sign_up

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    getData('/users?email=' + user.email)
    .then(res => {
        if(res.status !== 200 && res.status !== 201) return 
        if(res.data.length > 0) {
            alert('account already taken!')
            return
        } 

        postData('/users', user)
            .then(res => {
                if(res.status === 200 || res.status === 201)  {
                    location.assign('/banking1/pages/sign_in/')
                }

            })
    })
}