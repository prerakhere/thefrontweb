import { parseISO, format } from 'date-fns';

import Container from '../components/Container';
export default function BlogLayout({ children, frontMatter }) {
    return (
        <Container
            title={`thefrontweb - ${frontMatter.title}`}
            description={frontMatter.summary}
            date={new Date(frontMatter.publishedAt).toISOString()}
            type="article"
        >
            <article className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 mt-4 w-full">
                <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
                    {frontMatter.title}
                </h1>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
                    <div className="flex items-center">
                        <p className="text-sm text-gray-700 dark:text-gray-300 ml-1">
                            {format(
                                parseISO(frontMatter.publishedAt),
                                'MMMM dd, yyyy'
                            )}
                        </p>
                    </div>
                </div>
                <div className="prose dark:prose-dark max-w-none w-full mt-8">
                    {children}
                </div>
            </article>
        </Container>
    );
}
