import React from "react";
import { type NextPage } from "next";
import RootComponent from "src/components/common/RootComponent";
import { Home } from "src/components/Home";

const MainPage: NextPage = () => <RootComponent pageName="home" elem={<Home />} />;

export default MainPage;
