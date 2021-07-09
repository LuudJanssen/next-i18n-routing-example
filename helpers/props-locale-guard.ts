import { GetStaticProps } from "next";

export const propsLocaleGuard =
  (
    allowedLocales: string[],
    getServerPropsMethod: GetStaticProps
  ): GetStaticProps =>
  (context) => {
    const { locale } = context;

    if (typeof locale === "undefined") {
      throw new Error(
        "The props locale guard cannot be used when no locale is given."
      );
    }

    if (!allowedLocales.includes(locale)) {
      return {
        notFound: true,
      };
    }

    return getServerPropsMethod(context);
  };
