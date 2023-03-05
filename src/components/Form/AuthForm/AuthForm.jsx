import styles from './AuthForm.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AuthForm = () => {

  return (
   <Form className={styles.form}>
     <Form.Group>
       <Form.Label></Form.Label>
       <Form.Control/>
       <Form.Text></Form.Text>
     </Form.Group>
   </Form>
  )
}
