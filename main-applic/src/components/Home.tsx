import React from "react";
import { Center } from "@mantine/core";

export const Home = (): React.JSX.Element => {
    return (
        <>
            <Center maw={2000} mih={100} h={100} bg="var(--mantine-color-gray-light)">
                {/* <Container fluid h={50} bg="var(--mantine-color-blue-light)"> */}
                Fluid container has 100% max-width
                {/* </Container> */}
            </Center>
        </>
    );
};
