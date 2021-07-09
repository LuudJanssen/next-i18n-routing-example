import { GetStaticProps } from "next";
import { Locale } from "../helpers/locale.enum";
import { propsLocaleGuard } from "../helpers/props-locale-guard";
import MyAccountPage from "./mijn-account";

export const getStaticProps: GetStaticProps = propsLocaleGuard(
  [Locale.EN],
  () => ({
    props: {},
  })
);

export default MyAccountPage;
