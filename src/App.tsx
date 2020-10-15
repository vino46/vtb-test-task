import React from 'react';
import { Provider } from 'react-redux';

import css from './App.module.scss';

import Layout from './components/Layout';

import { store } from './store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <div className={css.app}>
                <Layout />
            </div>
        </Provider>
    );
}

export default App;
