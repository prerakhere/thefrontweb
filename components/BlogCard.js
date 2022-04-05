import Link from "next/link"
import { parseISO, format } from "date-fns"

export default function BlogCard({ title, publishedAt, summary, slug }) {
  return (
    <Link href={`/${slug}`}>
      <a className="w-full">
        <div className="mb-8 w-full border-l-4 rounded-none border-purple-400/90 dark:border-purple-500/90 pl-3 rounded dark:border-opacity-20 my-2">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-base sm:text-lg md:text-xl font-bold w-full text-gray-900 dark:text-gray-100">
              {title}
            </h4>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
            {format(parseISO(publishedAt), "MMM dd, yyyy")}
          </p>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </a>
    </Link>
  )
}
