import { all } from 'redux-saga/effects';
import { 
    WatchHandleTestSaga, 
} from './testActionSaga';


export default function* rootSagas() {
    yield all([
        WatchHandleTestSaga(),
    ]);
}