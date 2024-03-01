import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { render } from "$gfm";
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/gfm.min.css" />
      </Head>

      <main class="markdown-body">
        <h1>{post.title}</h1>
        <time>
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div dangerouslySetInnerHTML={{ __html: render(post.content) }} />
      </main>
    </>
  );
}
