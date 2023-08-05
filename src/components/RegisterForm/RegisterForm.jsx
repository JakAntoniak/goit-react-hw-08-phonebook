import { useDispatch } from 'react-redux';
import { register } from 'components/Redux/auth/operations';
import css from './Style.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css['register-form']} onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" name="name" placeholder="Enter username"></input>

      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your e-mail"></input>

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
      ></input>

      <button className={css.button} type="submit">
        Register Now
      </button>
    </form>
  );
};

export default RegisterForm;
