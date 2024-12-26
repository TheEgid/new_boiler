import React from "react";
import { type AppProps } from "next/app";
import MainLayout from "src/components/layout/MainLayout";

import "../styles/styles.scss";

const App = ({ Component, ...rest }: AppProps): React.JSX.Element => {

    return (
        <MainLayout>
            <Component {...rest.pageProps} />
        </MainLayout>
    );
};

export default App;
