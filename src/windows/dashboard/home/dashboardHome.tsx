import { Flex } from "@chakra-ui/react";
import Card from "./card";

export default function Home() {
    return<>
        <Flex
        direction={"row"}
        >
            <Card/>
        </Flex>
    </>
}