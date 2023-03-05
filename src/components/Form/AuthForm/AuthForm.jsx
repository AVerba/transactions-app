import styles from './AuthForm.module.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const AuthForm = ({ className}) => {
  const classList = cx(styles.authForm, className);

  return (
   <Form className={classList}>
     <p>Trans App</p>
     <Form.Group>
       <Form.Label></Form.Label>
       <Form.Control/>
       <Form.Text></Form.Text>
     </Form.Group>
   </Form>
  )
}

AuthForm.propTypes = {
  className: PropTypes.string,
};

