import { MDXRemote } from 'next-mdx-remote'
import { getPostBySlug, getPostsFiles } from '../lib/posts-util'
import BlogLayout from '../layouts/BlogLayout'
import components from '../components/MDXComponents'

export default function Blog({ source, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={{ ...components }} />
    </BlogLayout>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params
  const data = await getPostBySlug('blog', slug)
  return {
    props: {
      ...data,
    },
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles('blog')

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.mdx$/, ''))
  // console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}
