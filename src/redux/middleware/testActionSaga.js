import { put, takeEvery } from 'redux-saga/effects';
import {
    testActionSuccess,
    testActionFailure

} from '../actions/actions';

/**Handle postAd*/
export function* handleTestSaga(action) {
    try{
        const response = action.data
        yield put(testActionSuccess(response));
    }
    catch(error){
        yield put(testActionFailure(error));
    }
}

export function* WatchHandleTestSaga() {
    yield takeEvery('TEST_ACTION', handleTestSaga);
}
/**End of test saga*/
