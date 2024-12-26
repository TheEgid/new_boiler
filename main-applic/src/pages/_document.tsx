import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

const Document = (): React.JSX.Element => {

    return (
        <Html lang="ru" {...mantineHtmlProps}>
            <Head>
                <ColorSchemeScript defaultColorScheme="auto" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );

};

export default Document;
