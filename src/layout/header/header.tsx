import cn from "classnames";
import { useState } from "react";
import { cart, logo } from "../../assets";
import { menu } from "../../const";
import styles from "./header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToogleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={cn(styles.header)}>
      <div className="container">
        <div className={styles["header__wrap"]}>
          <div>
            <a href="#home">
              <img className={styles.header__logo} src={logo} alt="Logo" />
            </a>
          </div>
          <nav className={styles['header__nav']}>
            <button onClick={handleToogleMenu} className={styles.burger__btn}>
              <div
                className={cn(styles.burger__icon, {
                  [styles.burger__icon_open]: isOpen,
                })}
              />
            </button>
            <ul
              className={cn(styles.menu, {
                [styles.menu__open]: isOpen,
              })}
            >
              {menu.map((item, idx) => (
                <li key={idx}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className={styles["menu__link"]}
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className={styles["header__phone"]} href="tel:+88(800)600-09-90">
            8 8 (800) 600-09-908 901
          </a>
          <div className={styles["cart"]}>
            <img src={cart} alt="Cart icon" />
            <div className={styles["cart__count"]}>1</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
