import { Fragment } from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import BlogCard from '../components/BlogCard'

import { getAllPosts } from '../lib/posts-util'

function HomePage({ posts }) {
  const allPosts = posts
  return (
    <Fragment>
      <Container>
        <Head>
          <title>All Posts</title>
          <meta
            name="description"
            content="Posts related to frontend web development!"
          />
        </Head>
        <div className="flex flex-col mb-16">
          <h3 className="font-bold text-xl sm:text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">
            All Posts
          </h3>
          {allPosts.map((frontMatter) => (
            <BlogCard key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </Container>
    </Fragment>
  )
}

export function getStaticProps() {
  const posts = getAllPosts('blog')
  // console.log(posts)

  posts.sort((first, second) =>
    second.publishedAt > first.publishedAt
      ? 1
      : first.publishedAt > second.publishedAt
      ? -1
      : 0
  )
  // console.log(posts)
  return {
    props: {
      posts,
    },
  }
}

export default HomePage
