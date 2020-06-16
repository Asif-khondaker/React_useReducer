import React,{useState, useEffect} from 'react'
import Axios from 'axios'

function DataFetching() {

    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
           setloading(false)
           seterror('')
           setpost(response.data) 
        })
        .catch(error => {
            setloading(true)
            setpost({})
            seterror('Something went wrong!')
        })
    }, [])
    return (
        <div>
            {loading ? 'loading' : post.title }
            {error ? error : null}
        </div>
    )
}

export default DataFetching
