const LOAD = 'responses/LOAD';
const ADD = 'responses/ADD';

const loadResponses = responses => ({type: LOAD, responses});
const addResponse = response => ({type: ADD, response});

export const getResponses = () => dispatch => {
    if (localStorage.getItem("responses"))
    const responses =
}

export const createResponse = payload => async dispatch => {
    const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_SECRET}`
        },
        body: JSON.stringify(payload)
    });
    if (response.ok) {
        const data = response.json();
        dispatch(addResponse(data));

        return data;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurec=d. Please try again.']
    }
}

const responsesReducer = (state={}, action) => {
    let newState = {...state};
    switch(action.type) {
        case LOAD:

    }
}
