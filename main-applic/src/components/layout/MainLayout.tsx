
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //     // const { Header, Footer, Content } = Layout;

    return (
        <>
            {/* <Header className="layout__header header"> */}

            <div className="header__logo">My-GIRO</div>

            {children}

            {/* //             </Header> */}
            {/*
//             <Content className="layout__main">

//             </Content>

//             <Footer className="layout__footer">
//                 <p>&copy; 2024 My-GIRO. Все права защищены.</p>
//             </Footer> */}
        </>
    );
};

export default MainLayout;
