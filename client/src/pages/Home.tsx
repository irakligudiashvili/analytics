import { useAuth } from "../contexts/AuthContext"

function Home(){
    const {isLoggedIn, user} = useAuth();

    return(
        <div>
            <h1>Home</h1>
            
            {isLoggedIn && (
                <p>{user?.role}</p>
            )}
        </div>
    )
}

export default Home