import { use } from "react"
import Friend from "./friend"

export default function Friends({ fetchUser }) {
    const users = use(fetchUser)

    console.log(users)
    return (
        <div>
            <h3>Friends: {users.length}</h3>
            {
                users.map(user=><Friend user={user} key={user.id}></Friend> )
            }
        </div>
    )
}