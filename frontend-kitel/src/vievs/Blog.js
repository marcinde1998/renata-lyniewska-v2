import PostSection from "../components/postsSection/PostSection";


function Blog(props) {
  return (
    <div>
      <h2>Blog</h2>
      <div>
        <PostSection element={props} />
      </div>
    </div>
    
  )
}

export default Blog;