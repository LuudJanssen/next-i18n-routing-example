import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { Locale } from "../helpers/locale.enum";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <h1>Homepage: {locale}</h1>
      <Link href={locale === Locale.EN ? "/my-account" : "/mijn-account"}>
        Mijn account
      </Link>
    </div>
  );
};

export default Home;
