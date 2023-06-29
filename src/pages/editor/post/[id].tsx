import Tiptap from '@/components/editor/Tiptap';
import EditorLayout from '@/layouts/EditorLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Editor() {
  const router = useRouter();
  const postId = router.query.id as string;

  return (
    <>
      <Head>
        <title>{'Editor View | aidiyet'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditorLayout>
        <Tiptap postId={postId} />
      </EditorLayout>
    </>
  );
}
