import styles from './styles.module.css';

export const TopPage = () => {
  return (
    <div>
      <header>
        <div className={`${styles.flex} ${styles.justifyBetween}`}>
          <p>スケジュール管理App</p>
          <nav>
            <ul className={`${styles.flex} ${styles.gap5}`}>
              <li>利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

{/* <div className={`${styles.container}`}>
        <h1 className={`${styles.underline}`}>犬</h1>
    </div> */}
