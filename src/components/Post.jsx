/* eslint-disable jsx-a11y/anchor-is-valid */
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const publisedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publisedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={uuidv4()}>{line.content}</p>;
          }
          if (line.type === 'link') {
            return <p key={uuidv4()}><a href="#">{line.content}</a></p>;
          }
          return null;
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  publishedAt: PropTypes.instanceOf(Date).isRequired,
};
