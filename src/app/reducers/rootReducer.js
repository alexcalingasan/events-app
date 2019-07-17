import { combineReducers } from "redux";
import testReducer from "../../features/TestArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from "redux-form";

const rootReducer = combineReducers({
    test: testReducer,
    events: eventReducer,
    form: FormReducer
});

export default rootReducer;