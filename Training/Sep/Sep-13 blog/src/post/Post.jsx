import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://www.worldanimalprotection.org/sites/default/files/styles/600x400/public/media/int_files/1012343_edited-1.jpg?h=f452ebb1&itok=Kyz-88Kg"
        alt="image3"
      ></img>
      <div className="postInfo">
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">2021/09/07</span>
      </div>
      <p className="postDoc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rerum
        dignissimos laborum ducimus ut suscipit illo eveniet, laudantium itaque
        soluta eaque beatae omnis officia a aperiam? Dolorem non temporibus
        dolor?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab rerum
        dignissimos laborum ducimus ut suscipit illo eveniet, laudantium itaque
        soluta eaque beatae omnis officia a aperiam? Dolorem non temporibus
        dolor?
      </p>
    </div>
  );
}
