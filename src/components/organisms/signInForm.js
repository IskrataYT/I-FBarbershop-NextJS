import Title from '../atoms/title';
import InputField from '../molecules/input'
import styles from './css/signInForm.module.css'
import Button from '../atoms/button';

const SignInForm = () => {
  return(
    <div className={styles.formBody}>
      <div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign In</Title>
        <InputField type="email" placeholder="Email" margin="0 0 10% 0"/>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0"/>
        <Button primary>Sign In</Button>
      </div>
    </div>
  )
}

export default SignInForm;