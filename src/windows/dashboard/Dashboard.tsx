import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "../../../components/sidebar/SideBar";
import Home from "./home/dashboardHome";

export default function Dashboard({children}:any) {
    return<>
        <SideBar children={<Home/>}/>
    </>
}