/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/yuricavalini.png" alt="User cover" />
          <div className={styles.authorInfo}>
            <strong>Yuri Cavalini</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉
          {' '}
          <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          {' '}
          <a href="#">#nlw</a>
          {' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}