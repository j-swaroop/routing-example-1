// Write your JS code here
import "./index.css"


const BlogItem = (props) => {
    const {blogItem} = props
    const {id, title, description, publishedDate} = blogItem

    return(
        <li className="blog-item-container"> 
            <div className="blog-item-date">
                <h1 className="title"> {title} </h1>
                <p className="published-date"> {publishedDate} </p>
            </div>
            <p className="description"> {description} </p>
            <hr/>
        </li>
    )
}

export default BlogItem