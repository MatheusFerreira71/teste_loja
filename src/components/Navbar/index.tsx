import React, { useState, useEffect } from 'react';
import { ReactComponent as AccountIcon } from '../../assets/svg/usuario.svg';
import { ReactComponent as CartIcon } from '../../assets/svg/carrinho.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/busca.svg';
import { ReactComponent as ArrowIcon } from '../../assets/svg/seta-categorias.svg';
import './style.scss';
import { CatDropdown } from '../../interfaces';
import api from '../../services/api';

const Navbar: React.FC = ({ children }) => {
    const [categories, setCategories] = useState<CatDropdown[]>([]);
    useEffect(() => {
        api.get<CatDropdown[]>('categories').then(response => setCategories(response.data))
    }, [])

    return (
        <header>
            <nav className="navbar">
                <img src={require("../../assets/images/logo.png").default} alt="Logo" />
                <ul className="navbar-nav">
                    <li className="cat-drop">
                        <a href="#">Categorias <ArrowIcon /></a>
                        <ul className="dropdown">
                            {categories.map(category => (
                                <li key={category.id}><a href="#">{category.name}</a></li>
                            ))}
                        </ul>
                    </li>
                    <li className="search-bar">
                        <input type="text" />
                        <button><SearchIcon /></button>
                    </li>
                    <li>
                        <a href="#">Minha Conta <AccountIcon /></a>
                    </li>
                    <li>
                        <a href="#">Carrinho (2) <CartIcon /></a>
                    </li>
                </ul>
            </nav>
            {children}
        </header>
    );
}

export default Navbar;