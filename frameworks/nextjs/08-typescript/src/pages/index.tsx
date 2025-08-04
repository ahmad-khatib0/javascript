import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddPost from '@/components/AddPost'
import Post from '@/components/Post'

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'

// InferGetStaticPropsType allows us to set the type on the method getStaticProps. It will infer the type
// defined on the props returned by getStaticProps

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postsList, setPostsList] = React.useState(posts)

  const addPost = (e: React.FormEvent, formData: IPost) => {
    e.preventDefault()
    const post: IPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    }
    setPostsList([post, ...postsList])
  }

  const deletePost = async (id: number) => {
    const posts: IPost[] = postsList.filter((p: IPost) => p.id !== id)
    console.log(posts)
    setPostsList(posts)
  }

  if (!postsList) return <h1>Loading...</h1>

  return (
    <main className="container">
      <h1>My posts</h1>
      <AddPost savePost={addPost} />
      {postsList.map((p: IPost) => (
        <Post key={p.id} deletePost={deletePost} post={p} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const posts: IPost[] = await res.json()
  return {
    props: { posts },
  }
}
