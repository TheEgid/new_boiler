import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { type AppProps } from "next/app";
import MainLayout from "src/components/layout/MainLayout";

import "../styles/styles.scss";
import "@mantine/core/styles.css";

const theme = createTheme({
    primaryColor: "orange",
    // fontFamily: "\"Noto Sans Thai Looped\", sans-serif",
});

const App = ({ Component, ...rest }: AppProps): React.JSX.Element => {

    return (
        <MantineProvider theme={theme}>
            <MainLayout>
                <Component {...rest.pageProps} />
            </MainLayout>
        </MantineProvider>
    );
};

export default App;
