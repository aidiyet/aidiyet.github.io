import styles from './Tiptap.module.css';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { EditorContent, useEditor } from '@tiptap/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import axios from 'axios';
import localforage from 'localforage';

import { Post } from '@/lib/models/Post';
import MenuBar from '@/components/editor/MenuBar';

//
// ! Note: See 'src/styles/tiptap.css' for styling Tiptap.
//

interface IProps {
  postId: string;
}

function Tiptap({ postId }: IProps) {
  const forageKey = `editor-${postId}`;

  const [title, setTitle] = useState('Başlığı Düzenle...');
  const [author, setAuthor] = useState('Yazar(lar)ı düzenle...');
  const [savedContent, setSavedContent] = useState(
    'Restoring the latest draft if available...'
  );

  const mutation = useMutation({
    mutationFn: (post: Post) => {
      return axios.post('/api/posts', { post });
    },
  });

  useEffect(() => {
    // TODO: Try to retrieve from the origin (remote database) if applicable. Otherwise rely on the local draft and so on...
    // TODO - 2: If no post exists with the given ID, generate a new ID with UUIDv4 standards.

    localforage
      .getItem<string>(forageKey)
      .then((val) => {
        if (val) {
          setSavedContent(val);
        } else {
          setSavedContent(`
          ✏️ Buraya tıklayarak içeriğini oluşturmaya başlayabilirsin...<br /><br />
          
          Yukarıdaki menü butonları ile fevkalade yazının daha güzel şekle bürünmesini sağlamayı unutma! 🤗
          `);
        }
      })
      .catch(() => console.warn('Failed to restore the draft!'));
  }, [forageKey]);

  const editor = useEditor(
    {
      content: savedContent,
      onUpdate: ({ editor }) => {
        localforage.setItem(forageKey, editor.getHTML(), () =>
          console.warn('Failed to save the draft!')
        );
      },
      extensions: [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        StarterKit.configure({
          bulletList: {
            keepMarks: true,
            keepAttributes: false,
          },
          orderedList: {
            keepMarks: true,
            keepAttributes: false,
          },
        }),
      ],
    },
    [savedContent]
  );

  function setState(
    defaultValue: string,
    setFn: Dispatch<SetStateAction<string>>,
    value: string
  ) {
    if (!value) {
      return setFn(defaultValue);
    }
    return setFn(value);
  }

  return (
    <>
      <div id={styles.head}>
        <input
          id={styles.title}
          type="text"
          value={title}
          onChange={(e) =>
            setState('Başlığı düzenle...', setTitle, e.target.value)
          }
        />
        <label>
          <b>Yazar: </b>
          <input
            id={styles.author}
            type="text"
            value={author}
            onChange={(e) =>
              setState('Yazar(lar)ı düzenle...', setAuthor, e.target.value)
            }
          />
        </label>
      </div>
      {editor && (
        <>
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </>
      )}
      <div id={styles.publish}>
        <button
          onClick={() => {
            if (editor) {
              mutation.mutate({
                id: postId,
                content: editor.getHTML(),
                title,
                author,
              });
            }
          }}
        >
          PUBLISH
        </button>
      </div>
    </>
  );
}

export default Tiptap;
