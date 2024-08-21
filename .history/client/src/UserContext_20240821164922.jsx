import { createContext} from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    // const [user, setUser] = useState(null);

    return (
        // <UserContext.Provider value={{ user, setUser }}>
        <div>
            {children}
        </div>    
        // </UserContext.Provider>
    )
}
