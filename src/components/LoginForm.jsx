import { useDispatch } from 'react-redux';
import { logIn, logPassword } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.login.value);
    console.log(form.elements.password.value);
    dispatch(logIn(form.elements.login.value));
    dispatch(logPassword(form.elements.password.value));
      form.reset();
      navigate('/dashboard', { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" placeholder="login" />
      <input type="text" name="password" placeholder="password" />
      <button type="submit">Log In</button>
    </form>
  );
};
