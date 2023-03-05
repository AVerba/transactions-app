import styles from './AuthView.module.scss';
import {AuthForm} from "../../components/Form/AuthForm";

export const AuthView = () => {

  return(
    <div className={styles.auth__container}>
      <h2 className={styles.title}>Please sing in for further work</h2>
      <AuthForm className={styles.form}/>

    </div>
  )

}
