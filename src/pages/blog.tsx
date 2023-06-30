import db from '@/lib/db/client';
import { Post } from '@/lib/models/Post';
import type { NextPageContext } from 'next';
import Link from 'next/link';

type BlogPostsProps = {
  posts?: Post[];
};

const PerPageResult = 10;

export const getServerSideProps = async (ctx: NextPageContext) => {
  let page = 1;

  const requestedPage = Number(ctx.query.page);
  if (typeof requestedPage === 'number' && page >= 1) {
    page = requestedPage;
  }

  const posts = await db<Post>('posts')
    .select('author', 'id', 'title', 'updated_at')
    .orderBy('updated_at', 'desc')
    .offset(page * PerPageResult - PerPageResult)
    .limit(PerPageResult);

  return {
    props: {
      posts: posts.map((p) => {
        console.log(p);

        return {
          ...p,
          updated_at: (p.updated_at = new Date(
            p.updated_at as string
          ).toLocaleDateString()),
        };
      }),
    },
  };
};

export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <>
      {/* TODO: Add BaseLayout. */}

      {(posts ?? []).map((post, i) => (
        /* TODO: Wrap into a card component. */

        <Link key={i} href={`/blog/${post.id}`}>
          <div>
            <p>{post.updated_at}</p>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.content}</p>
            <hr />
          </div>
        </Link>
      ))}
    </>
  );
}
