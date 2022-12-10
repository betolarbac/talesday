import Image from "next/image";
import styles from "./Header.module.scss"
import searchIcon from "../../../public/assets/svg/search.svg"

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}>Tales Day<span>.</span></h1>


        <ul className={styles.list}>
          <li><a href="">Home</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Categorias</a></li>
          <li><a href="">Contato</a></li>
        </ul>


      <div className={styles.search}>
      <input type="search" name="buscar" id="buscar"  placeholder="Buscar"/>
        <button>
          <Image src={searchIcon} alt="icon search" /> 
        </button>
      </div>
    </div>
  );
}
