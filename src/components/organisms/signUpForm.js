import Title from '../atoms/title';
import InputField from '../molecules/input'
import styles from './css/signInForm.module.css'
import Button from '../atoms/button';

const SignUpForm = () => {
  return(
    <div className={styles.formBody}>
      <div className={styles.formContainer}>
        <Title margin="0 0 15% 0">Sign Up</Title>
        <InputField type="names" placeholder="Name" margin="0 0 10% 0"/>
        <InputField type="email" placeholder="Email" margin="0 0 10% 0"/>
        <InputField type="text" placeholder="Phone Number" margin="0 0 10% 0"/>
        <InputField type="password" placeholder="Password" margin="0 0 10% 0"/>
        <InputField type="password" placeholder="Confirm Password" margin="0 0 10% 0"/>
        <Button primary>Sign Up</Button>
      </div>
    </div>
  )
}

export default SignUpForm;