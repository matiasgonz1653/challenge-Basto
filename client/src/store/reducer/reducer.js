import {
    FIND_ANIMAL_BY_TYPE,
    GET_ALL_ANIMALS,
    GET_ANIMAl_BY_ID,
    RECEIVED_POST,
    REQUEST_POST,
} from "../actions-type/types";
const initialState = {
    animals: null,
    animal: null,
    isLoading: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_ALL_ANIMALS:
        return {
            ...state,
            animals: action.payload,
        };
    case GET_ANIMAl_BY_ID:
        return {
            ...state,
            animal: action.payload,
        };
    case FIND_ANIMAL_BY_TYPE:
        return {
            ...state,
            animals: state.animals.filter((animal) =>
                animal.type.toLowerCase().includes(action.payload)
        ),
        };
    case REQUEST_POST:
        return {
            ...state,
            isLoading: true,
        };
    case RECEIVED_POST:
        return {
            ...state,
            isLoading: false,
        };
    default:
        return { ...state };
    }
};

export default rootReducer;