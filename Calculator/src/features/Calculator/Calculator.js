import React from "react";

import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";

import { StyledSafeAreaView } from "./Styles";

const Calculator = () => {

    return (
        <StyledSafeAreaView>
            <Display/>
            <Keyboard/>
        </StyledSafeAreaView>
    );

};

export default Calculator;