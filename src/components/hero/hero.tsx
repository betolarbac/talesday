import Image from "next/image";
import banner from "../../../public/assets/png/banner.png"
import styles from "./Hero.module.scss"

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h2>Veja o guia definitivo para conquistar seus objetivos como DEV em 2022</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. </p>
        <a href="#">Veja mais</a>
      </div>

      <div >
        <Image src={banner} alt="banner" className={styles.imagem}/>
      </div>
    </div>
  );
}