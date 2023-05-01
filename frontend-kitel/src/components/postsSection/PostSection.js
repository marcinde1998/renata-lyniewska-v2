import './PostSection.css';

function PostSection(props) {
  console.log(props);
  return (
    <div className="postSectionContainer" >
      {props.element.getBlogPostList.map(blogPost => {
        return (
          <div className="post" key={blogPost._id}>
            <div className="postContent">
              <h3>{blogPost.title}</h3>
              <p>{blogPost.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
  
}

export default PostSection;