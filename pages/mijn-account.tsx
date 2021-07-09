import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Locale } from "../helpers/locale.enum";
import { propsLocaleGuard } from "../helpers/props-locale-guard";
import styles from "../styles/Home.module.css";

export const MyAccountPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <h1>
        {locale === Locale.EN ? "My account:" : "Mijn account:"} {locale}
      </h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = propsLocaleGuard(
  [Locale.NL, Locale.NL_BE],
  () => ({
    props: {},
  })
);

export default MyAccountPage;
