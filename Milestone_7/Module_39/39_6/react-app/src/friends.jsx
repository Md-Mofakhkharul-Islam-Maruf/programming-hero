import { use } from "react"

export default function Friends({friends}){
    const users= use(friends)
    console.log(friends)
    return(
        <div>
            <h3>Friends: {users.length}</h3>
        </div>
    )
}