import './PostSection.css';

function PostSection(props) {

  return (
    <div className="postSectionContainer" >
      {props.element.getBlogPostList.map(blogPost => {
        return (
          <div key={blogPost._id}>
            <div>{blogPost.title}</div>
            <div>{blogPost.content}</div>
          </div>
        )
      })}
      <div>elo</div>
    </div>
  );
}

export default PostSection;