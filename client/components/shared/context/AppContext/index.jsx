import React from 'react';

export const defaultValue = {
  cellHeight: 40, // Hour Cell Height
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
