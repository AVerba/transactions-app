import styles from './Google.module.scss';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../utils/mediaQuery';
import Button from 'react-bootstrap/Button';
import { ReactComponent as GoogleIcon } from '../../images/icons/GoogleIconBtn.svg';


export const Google = () => {

  const Mobile = isMobile(useMediaQuery);
  return (
    <>
      <p className={Mobile ? styles.topTextMobile : styles.topTextDefault}>
        You can sign in with your Google Account:
      </p>
      <Button className={styles.button} type="button">
        <a
          className={styles.container}
          href="https://3000/api/auth/google"
        >
          <GoogleIcon />
          <span className={styles.btnLabel}>Google</span>
        </a>
      </Button>
      <p
        className={Mobile ? styles.bottomTextMobile : styles.bottomTextDefault}
      >
        Or sign in using your e-mail and password, having previously registered:
      </p>
    </>
  );
};
