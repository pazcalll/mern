import axios from "axios"

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue}
}

export const addItemPost = (form) => {
    const data = {
        name: form.title,
        goodsToChannel: form.body
    }

    // console.log(data)
    axios.post('http://localhost:4000/goods', data)
    .then(res=>{
        console.log("insert data: ", res)
    })
    .catch(err =>{
        console.log("error: ", err)
    })
}

export const addItemUpdate = (form, id) => {
    const data = {
        name: form.title,
        goodsToChannel: form.body
    }

    // console.log(data)
    axios.put(`http://localhost:4000/goods/${id}`, data)
    .then(res=>{
        console.log("updated data: ", res)
    })
    .catch(err =>{
        console.log("error: ", err)
    })
}