import React, { createContext, useState } from 'react';


const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [feedback, setFeedback] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <AppContext.Provider value={{ feedback, setFeedback,
            modalOpen, setModalOpen
         }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };