import React, { useState } from "react";

import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";

import { StyledSafeAreaView } from "./Styles";

import StringUtils from "../../shared/utils/StringUtils";

const Calculator = () => {

    const [actualOperation, setActualOperation] = useState("");
    const [numbers, setNumbers] = useState(new Array(2));
    const [expression, setExpression] = useState("");

    var actualNumberIndex = 0;

    const handleNumberPress = (number) => {
        numbers[actualNumberIndex] = number;
        setExpression(`${StringUtils.getDefaultIfEmpty(numbers[0])} ${StringUtils.getDefaultIfBlank(actualOperation)} ${StringUtils.getDefaultIfEmpty(numbers[1])}`);
    };

    const handleOperationPress = (operation, lastNumber) => {

    };

    return (
        <StyledSafeAreaView>
            <Display formula={expression}/>
            <Keyboard onNumberPress={handleNumberPress}/>
        </StyledSafeAreaView>
    );

};

export default Calculator;