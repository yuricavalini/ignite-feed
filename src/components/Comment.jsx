import PropTypes from 'prop-types';
import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ id, content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/yuricavalini.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Cavalini</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir
            {' '}
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};
