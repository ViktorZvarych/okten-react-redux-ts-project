import css from './UserInfo.module.css';

const UserInfo = () => {
    console.log('render UserInfo');

    return (
        <div className={css.userInfo}>
            <h2>UserInfo </h2>
        </div>
)
    ;
};

export {UserInfo};