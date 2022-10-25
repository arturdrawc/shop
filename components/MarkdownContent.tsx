import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

export const MarkdownContent = ({ children }: { children: MDXRemoteSerializeResult<Record<string, unknown>> }) => {
  return (
    <article className="prose lg:prose-xl">
      <MDXRemote
        {...children}
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
      />
    </article>
  );
};