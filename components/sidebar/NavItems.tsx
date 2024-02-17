import { Flex , Link, Menu, MenuButton ,Text , Icon } from "@chakra-ui/react";

export default function NavItems({navSize , icon ,title ,active}:any) {
    return<>
        <Flex
            mt={1}
            flexDir={"column"}
            w={"100%"}
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#AEC8CA"}
                    p={1.5}
                    borderRadius={8}
                    _hover={{textDecor:"none",backgroundColor: "#AEC8CA"}}
                    // width={navSize == "large" && "100%"}
                >
                    <MenuButton w={"100%"}>
                        <Flex>
                            <Icon as={icon} fontSize={"xl"} color={active ? "#82AAAD" : "gray.500"}/>
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    </>
}