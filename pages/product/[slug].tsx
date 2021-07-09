import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Locale } from "../../helpers/locale.enum";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    {
      locale: Locale.NL,
      params: {
        slug: "nederlandse-vlag",
      },
    },
    {
      locale: Locale.NL_BE,
      params: {
        slug: "belgische-vlag",
      },
    },
    {
      locale: Locale.EN,
      params: {
        slug: "english-flag",
      },
    },
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = ({ params = {} }) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

const ProductPage: NextPage = ({ slug }) => {
  return <h1>test {slug}</h1>;
};

export default ProductPage;
