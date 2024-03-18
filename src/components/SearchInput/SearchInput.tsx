import {useNavigate, useSearchParams} from "react-router-dom";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import  css from './SearchInput.module.css'


const SearchInput = () => {
    console.log('render SearchResults');

    const [, setUrlParams] = useSearchParams();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = data => {
        setUrlParams(`query=${data.search}`);
        navigate(`/movies/search-results?query=${data.search}`);
        reset();
    }

    return (
        <form className={css.searchInput} onSubmit={handleSubmit(onSubmit)}>

            <input {...register("search", { required: true })} type="text"  name="search"/>

            <button type="submit" className={css.btn}><span>🔍</span></button>
        </form>
    );
}

export {SearchInput};