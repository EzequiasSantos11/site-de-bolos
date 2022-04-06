import React, { useState } from "react";
import Styles from "./styles.module.scss";
interface HeaderType{
  headerScroll: boolean
}
export function Header({ headerScroll }:HeaderType) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={Styles.container}>
      <header className={headerScroll ? Styles.noVisible : Styles.container}>
        <div className={Styles.logo}>
          <img src="/assets/confeiteira.jpg" alt="imagem de logo, um bolo de cenoura." />
          <h1>Dani's cakes</h1>
        </div>
        <div className={showMenu ? Styles.menuIcon : Styles.menuIconClose} onClick={()=>setShowMenu(!showMenu)}>
          <span className={showMenu ? Styles.line1 : Styles.line}></span>
          <span className={showMenu ? Styles.line2 : Styles.line}></span>
          <span className={showMenu ? Styles.line3 : Styles.line}></span>
        </div>
        <div onClick={()=>setShowMenu(false)} className={showMenu ? Styles.visibleBack : Styles.notVisible}></div>
        <nav className={showMenu ? Styles.visible : ""}>
          <ul>
            <li onClick={()=>setShowMenu(false)}>
              <a href="#home">Home</a>
            </li>
            <li onClick={()=>setShowMenu(false)}>
              <a href="#cardapio">Cardápio</a>
            </li>
            <li onClick={()=>setShowMenu(false)}>
              <a href="#sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}