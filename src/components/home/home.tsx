import Image from "next/image";
import Link from "next/link";
import post from "../../../public/assets/png/banner.png";
import styles from "./HomePost.module.scss"

export default function HomePost() {
  return (
    <div className={styles.content}>
      <div className={styles.firstPost}>
        <Image src={post} alt="post" />
        <span>Janeiro 04, 2022</span>
        <Link href="/">
         Começando no ReactJS em 2022
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu
          in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
          tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
          aenean sit vitae, sed tristique. Sed volutpat aenean.
        </p>
      </div>

      <div className={styles.secondPost}>
        <div>
          <span>Janeiro 04, 2022</span>
          <Link href="/">
              Conheça as principais técnicas para conseguir uma vaga
              internacional em programação
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
          </p>
        </div>

        <div>
          <span>Janeiro 04, 2022</span>
          <Link href="/">
            Começando no ReactJS em 2022
          </Link>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
          </p>
        </div>
      </div>

      <div className={styles.allPost}>
        <div>
          <Image src={post} alt="post" />
          <span>Janeiro 04, 2022</span>
          <Link href="/">
          10 dicas para conseguir a vaga desejada
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,

          </p>
        </div>

        <div>
          <Image src={post} alt="post" />
          <span>Janeiro 04, 2022</span>
          <Link href="/">
          Deixe seu código mais semântico com essas dicas
          </Link>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
          </p>
        </div>

        <div>
          <Image src={post} alt="post" />
          <span>Janeiro 04, 2022</span>
          <Link href="/">
          Use essas dicas nas suas aplicações mobile
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,

          </p>
        </div>
      </div>
    </div>
  );
}
