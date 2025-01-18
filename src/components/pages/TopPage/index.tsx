import styles from './styles.module.css';

export const TopPage = () => {
  return (
    <div className={styles.relative}>
      <header className={styles.header}>
        <div className={styles.container}>
          <p className={styles.logo}>スケジュール管理APP</p>
          <nav className={styles.nav}>
            <ul className={styles.nav}>
              <li className={styles.navItem}>ご利用方法</li>
              <li className={styles.navItem}>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
