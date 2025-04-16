import { use } from "react"
import Post from "./post"

export default function Posts({fetchPosts}){
    
    const take=use(fetchPosts)
    // console.log(take)
    return(
        <div>
            <h3>All Posts are here: {take.length}</h3>
            {
                take.map((single) => <Post single={single} key={single.id}></Post>)
            }
        </div>
    )
}