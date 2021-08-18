import axios from "axios";

export const updateGoods = (page) => (dispatch) => {
    axios.get(`http://localhost:4000/goods?page=${page}&perPage=5`)
        .then(result => {
            const resultAPI = result.data
            console.log(resultAPI)

            // setData(resultAPI)
            dispatch({type: 'UPDATE_DATA_GOODS', payload: resultAPI.data})
            dispatch({
                type: 'UPDATE_NUMBER', 
                payload: {
                    currentPage: resultAPI.current_page,
                    totalPage: Math.ceil(resultAPI.total_item / 5)
                }
            })

        })
        .catch(err => console.log(err))
}