import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
     <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"8 "}>
        <Button variant={"unstyled"} color={"goldenrod"}>
            <Link to="/">Home</Link>
        </Button> 
        <Button variant={"unstyled"} color={"goldenrod"}>
            <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button variant={"unstyled"} color={"goldenrod"}>
            <Link to="/coins">Coins</Link>
        </Button>
     </HStack>
    )
}

export default Header;