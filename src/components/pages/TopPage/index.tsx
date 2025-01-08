import styles from './styles.module.css';

export const TopPage = () => {
  return (
    <div>
      <header>
        <div className={`${styles.flex} ${styles.justifyBetween}`}>
          <p>スケジュール管理APP</p>
          <nav>
            <ul className={`${styles.flex} ${styles.gap5}`}>
              <li>ご利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
