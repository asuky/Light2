import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducers';
import allSagas from './sagas/allsagas';

import MainUI from './components/MainUI';

import { loadLights, toggleLight } from './actions/actions';

import './index.css';
import * as serviceWorker from './serviceWorker';

const sagaMiddlewares = createSagaMiddleware();
const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddlewares, logger))
);

sagaMiddlewares.run(allSagas);

//ReactDOM.render(<App />, document.getElementById('root'));

function mapStateToProps(state) {
    return {
        lightsData: state.LightButton.lightsData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRefreshClick: () => {
            dispatch(loadLights());
        },
        onLightButtonClick: (id, status) => {
            console.log("id: " + id + " / status: " + status);
            dispatch(toggleLight(id, status));
        }

        
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainUI);

// 開始時に電灯状態をロードするため1回だけ LOAD_LIGHTS を dispatch する
store.dispatch(loadLights());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
