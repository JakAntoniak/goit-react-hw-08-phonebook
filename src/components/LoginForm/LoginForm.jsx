import css from './Style.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'components/Redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css['login-form']} onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your e-mail"></input>

      <label>Password </label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
      ></input>

      <button className={css.button} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
