import {Header} from "../../components";
import css from './ErrorPage.module.css';

const ErrorPage = () => {

    return (
        <div>
            <Header/>
            <div className={css.errorPage}>
                <h2>
                  Oops! Page not found.
                </h2>
            </div>

        </div>
    );
};

export {ErrorPage};