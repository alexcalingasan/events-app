import { combineReducers } from "redux";
import testReducer from "../../features/TestArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import {reducer as FormReducer} from "redux-form";
import {reducer as ToastrReducer} from "react-redux-toastr";
import modalReducer from "../../features/modal/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    test: testReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer
});

export default rootReducer;