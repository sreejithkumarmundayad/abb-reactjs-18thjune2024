import React from 'react'
import Posts from '../../services/PostService'

function PostList(search: Readonly<{ searchText: string}>) {
  const posts = (() => { if(search.searchText) { return Posts().filter((post) => 
    post.title.includes(search.searchText) || post.body.includes(search.searchText)
  ) } return Posts() })();
  return (
    <div>
       {
        posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
