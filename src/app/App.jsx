import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Posts from "../companents/posts"
import Modal from "../companents/modal"

const App =() => {
    const [users,setUsers] = useState([])
    const [info,setInfo] = useState({})
    const [open,setOpen] = useState(false)

    const handlyClick = (item) => {
        setInfo(item)
        setOpen(true)
    }

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => setUsers(result))
    },[])


    return <div className="">
        <div className="flex h-[90vh] border-2 border-[#166199] m-5">
          <div className="border-r-4 w-64 h-full border-[#166199] p-2">
            <h1 className="text-3xl pb-2 font-bold">users list</h1>
           <div className="flex flex-col gap-4">
           {
            users.map(item => (
                <div key={item.id} className="flex item-center justify-between">
                    <Link to={`/${item.id}`}>{item.id}.{item.name}</Link>
                    <button onClick={() => handlyClick(item)} className="px-[8px] py-[4px] rounded bg-[#166199] text-white">info</button>
                </div>
            ))
           }
           </div>
          </div>
          <div className="p-3">
            <Posts/>
          </div>
          {
            open && <Modal info={info}/>
          }
        </div>
    </div>
}
export default App