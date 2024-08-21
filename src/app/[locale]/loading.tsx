import styles from '@/styles/loading.module.scss';

export default function LoadingPage() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}>
        <div />
        <div />
      </div>
    </div>
  );
}
