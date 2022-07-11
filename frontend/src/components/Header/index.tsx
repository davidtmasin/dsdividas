import logo from '../../assets/img/logo.png'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsdividas-logo-container">
                    <img src={logo} alt="Logo dsdividas" />
                    <h1>DSDívidas</h1>
                    <p>Desenvolvido por
                        <a href="https://github.com/davidtmasin/" target="_blank" title="Acesse meu github! 😊">
                            <strong>@davidtmasin</strong>
                        </a>
                    </p>
                </div>
            </header>

        </>
    )
}

export default Header