import db from '@/lib/db/client';
import { Post } from '@/lib/models/Post';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { mapKeys, snakeCase } from 'lodash';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const session = await getSession(req, res);

    const editorEmail = session?.user.email;
    const postData = req.body.post;

    const postToBeUpserted = mapKeys(
      { editorEmail, ...postData },
      (_val, key) => snakeCase(key)
    ) as Post;

    await db<Post>('posts').upsert(postToBeUpserted);
    return res.status(200).send('Ok');
  }
  return res.status(405).send('Method Not Allowed');
};

export default withApiAuthRequired(handler);
