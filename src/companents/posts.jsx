import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Posts = () => {
    const {pathname} = useLocation()
    const [posts,setPosts] = useState([])
    
    let path = pathname.slice(1)
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${path}`)
        .then(response => response.json())
        .then(result => setPosts(result))
    },[path])

    console.log(posts)

    return <div>
        <h1 className="text-3xl font-bold pb-3">Posts list</h1>
        <div>
            {       
                posts.map(item => (
                    <p key={item.id}>{item.title}</p>
                ))
            }
        </div>
    </div>
}

export default Posts