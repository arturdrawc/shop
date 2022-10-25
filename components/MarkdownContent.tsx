import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const MarkdownContent = ({ children }: { children: string }) => {
  return (
    <article className="prose lg:prose-xl">
      <ReactMarkdown
        components={{
          a: ({ href, ...props }) => {
            if (!href) {
              return <a {...props}></a>;
            }

            if (href.startsWith("http")) {
              return (
                <a
                  {...props}
                  href={href}
                  target="blank"
                  rel="noopener noreferrer"
                ></a>
                );
            }

            return (
              <Link href={href}>
                <a {...props}></a>
              </Link>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  );
};