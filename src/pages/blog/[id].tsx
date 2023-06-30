import db from '@/lib/db/client';
import { Post } from '@/lib/models/Post';
import type { NextPageContext } from 'next';

type BlogPostProps = {
  post?: Post | null;
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const id = ctx.query.id as string;

  const post = await db<Post>('posts')
    .select('author', 'content', 'title', 'id', 'updated_at')
    .where({ id })
    .first();

  return {
    props: {
      post:
        {
          ...post,
          updated_at: new Date(post?.updated_at as string).toLocaleDateString(),
        } ?? null,
    },
  };
};

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <>
      {/* TODO: Add BaseLayout. */}

      {post != null ? (
        <div>
          {/* TODO: Render with Tiptap in uneditable mode. Mount the Editor component if the access is authorized (checks conditionally). Removes '/editor/post/*' routes. */}

          <p>{post?.updated_at}</p>
          <p>{post.title}</p>
          <p>{post.id}</p>
          <p>{post.author}</p>
          <p>{post.content}</p>
        </div>
      ) : (
        <div>Not Found</div>
      )}
    </>
  );
}
