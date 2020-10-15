import React from "react";

import ButtonTypes from "../../shared/constants/ButtonTypes";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import { StyledButtonGroup, StyledKeybordGroup } from "./Styles";

const Keyboard = (
    onNumberPress, onOperationPress
) => {

    let actualNumber = "";

    const handleNumberPress = (numberPressed) => {

        actualNumber = actualNumber.concat(`${numberPressed}`);
        console.log(actualNumber);
    };

    return (
        <StyledKeybordGroup>
            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={'CE'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton content={'7'} operation={() => { handleNumberPress(7) }} />
                <CalculatorButton content={'4'} operation={() => { handleNumberPress(4) }} />
                <CalculatorButton content={'1'} operation={() => { handleNumberPress(1) }} />
                <CalculatorButton content={'0'} operation={() => { handleNumberPress(0) }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={'+/-'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton content={'8'} operation={() => { handleNumberPress(8) }} />
                <CalculatorButton content={'5'} operation={() => { handleNumberPress(5) }} />
                <CalculatorButton content={'2'} operation={() => { handleNumberPress(2) }} />
                <CalculatorButton content={'.'} operation={() => { handleNumberPress(8) }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={'%'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton content={'9'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton content={'6'} operation={() => { handleNumberPress(6) }} />
                <CalculatorButton content={'3'} operation={() => { handleNumberPress(3) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={'='} operation={() => { handleNumberPress(8) }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={'/'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={'*'} operation={() => { handleNumberPress(6) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={'-'} operation={() => { handleNumberPress(3) }} />
                <CalculatorButton type={ButtonTypes.OperationDoubleVertical} content={'+'} streach={true} operation={() => { handleNumberPress(8) }} />
            </StyledButtonGroup>
        </StyledKeybordGroup>
    );

};

export default Keyboard;