import axios from "axios";

/* requests for categories and then questions to render in app.js */
export const  requestCats =  async () => {
    const URL='https://opentdb.com/api_category.php'
    const response = await axios.get(URL)

    return response
}

export const requestQ = async (topic) => {
    const URL=`https://opentdb.com/api.php?amount=10&category=${topic}`
    const response = await axios.get(URL)

    return response
}