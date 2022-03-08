import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log("this is post props" + post)
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="Post Image" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {/* {post.categories.map((c) => {
            <span className="postCat" key={c.id}>
              {c.name}
            </span>;
          })} */}
          {post.categories}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle"> {post.title} </span>
        </Link>
        <hr />
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
