import { combineReducers } from "redux";
import testReducer from "../../features/TestArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from "redux-form";
import modalReducer from "../../features/modal/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: authReducer
});

export default rootReducer;