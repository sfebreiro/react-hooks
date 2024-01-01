import React, { useState } from 'react';
import { UserContext } from './UserContext';

const userA = {
    'id': 1,
    'name': 'Samuel',
    'email': 'samuel@google.com'
}

export const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState();

  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user }}> 
    <UserContext.Provider value={{ user, setUser }}> 
        { children }
    </UserContext.Provider>
  )

}
