import { createStore } from 'redux;'

const rootReducer = combinReducers({
    responses: responsesReducer
});

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState);
}

export default configureStore;
