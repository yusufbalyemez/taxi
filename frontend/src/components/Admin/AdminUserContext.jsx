// UserContext.js
import React, { createContext, useState, useContext } from 'react';

const AdminUserContext = createContext();

export const useAdminUser = () => useContext(AdminUserContext);

export const AdminUserProvider = ({ children }) => {
    const [adminUserId, setAdminUserId] = useState(null);

    return (
        <AdminUserContext.Provider value={{ adminUserId, setAdminUserId }}>
            {children}
        </AdminUserContext.Provider>
    );
};
