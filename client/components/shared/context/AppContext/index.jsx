import React from 'react';

export const defaultValue = {
  cellHeight: 60, // Hour Cell Height
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
