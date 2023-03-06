import styles from './Loader.module.css';
import { ReactComponent as BarLoader } from '../../images/svg/bars.svg';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <BarLoader className={styles.loader} />
    </div>
  );
};
