import db from '@/lib/db/client';
import { Post } from '@/lib/models/Post';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'POST': {
      const session = await getSession(req, res);

      const updated_at = new Date();
      const editor_email = session?.user.email;
      const postData = req.body.post;

      await db<Post>('posts').upsert({ updated_at, editor_email, ...postData });
      return res.status(200).send('Ok');
    }

    default: {
      return res.status(405).send('Method Not Allowed');
    }
  }
};

export default withApiAuthRequired(handler);
