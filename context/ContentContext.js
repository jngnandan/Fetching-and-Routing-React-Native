

import { createContext, useState, useContext } from "react";

export const ContentContext = createContext({
    id : [],
    addFavorite : () => {},
    removeFavorite : () => {},
    name: 'Nandan'
});


function ContentProvider({children}) {
    const [id, setId] = useState([])
    const [name, setName] = useState('Nandan')

    const addFavorite = (id) => {
        setId([...id, id])
    }

    const removeFavorite = (id) => {
        setId(id.filter((item) => item !== id))
    }

    return (
        <ContentContext.Provider value={{id, addFavorite, removeFavorite, name}}>
            {children}
        </ContentContext.Provider>
    )
}

export default ContentProvider

