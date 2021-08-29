import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const StoreProvider = ({ value = [], ...props }) => {
	return <Provider store={store} {...props} />;
};

export { StoreProvider };
