const initialState = {
    form: {
        title:'',
        body:''
    }
}

const addItemReducer = (state = initialState, action) => {
    if(action.type === 'SET_FORM_DATA'){
        console.log(action)
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }
    return state;
}

export default addItemReducer;