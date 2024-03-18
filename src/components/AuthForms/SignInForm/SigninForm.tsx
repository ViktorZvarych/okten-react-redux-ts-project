import css from './SignInForm.module.css';

const SignInForm = () => {
    console.log('render LoginForm');

    return (
        <div className={css.registerForm}>
            <h2>SignInForm</h2>
        </div>
    );
};

export {SignInForm};