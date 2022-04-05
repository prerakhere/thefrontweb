import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'

const postsDirectory = path.join(process.cwd(), 'data')

export function getPostsFiles(type) {
  return fs.readdirSync(path.join(process.cwd(), 'data', type))
}

export function getAllPosts(type) {
  const files = fs.readdirSync(path.join(process.cwd(), 'data', type))
  // console.log(files)
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'data', type, postSlug),
      'utf8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}

export async function getPostBySlug(type, slug) {
  const postSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(postsDirectory, type, `${postSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        import('remark-slug'),
        [
          import('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
          },
        ],
        import('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })
  return {
    slug: postSlug,
    frontMatter: {
      ...data,
    },
    source,
  }
}
