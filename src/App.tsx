import React from 'react';

import Layout from './components/Layout';

import css from './App.module.scss';

function App(): JSX.Element {
    return (
        <div className={css.app}>
            <Layout />
        </div>
    );
}

export default App;
