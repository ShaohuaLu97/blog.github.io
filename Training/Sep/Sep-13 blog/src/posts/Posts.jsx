import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
  return (
    <div className="posts">
        {/* <Post/> */}
        {Array(6).fill(<Post/>)}
    </div>
  )
}

//Properties and method in jsx are camelCase
//Html inside JS
//className is used instead of class for adding css class
