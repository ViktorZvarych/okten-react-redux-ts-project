import css from './Footer.module.css'

const Footer = () => {
    console.log('render Footer');

    return (
        <footer className={css.footer}>
            <p><b>© Developed by Viktor Zvarych</b></p>
            <p><b>Visit my <span> </span>
                <a href="https://github.com/ViktorZvarych/" target="_blank" rel="noopener noreferrer">GitHub page</a>
            </b></p>
        </footer>
    );
}

export {Footer};