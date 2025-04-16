import { use } from "react"

export default function Friends({fetchUser}){
    const users= use(fetchUser)
    console.log(fetchUser)
    return(
        <div>
            <h3>Friends: {users.length}</h3>
        </div>
    )
}