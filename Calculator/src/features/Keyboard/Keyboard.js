import React, { useState, useEffect } from "react";

import ButtonTypes from "../../shared/constants/ButtonTypes";
import CalculatorButton from "../../components/CalculatorButton/CalculatorButton";
import { StyledButtonGroup, StyledKeybordGroup } from "./Styles";

import { hasSetFunctionProperty } from "../../shared/utils/Utils";
import StringUtils from "../../shared/utils/StringUtils";
import Operations from "../../shared/constants/Operations";

const Keyboard = ({
    onNumberPress=undefined, onOperationPress=undefined
}) => {

    const [actualNumber, setActualNumber] = useState('0');

    const handleNumberPress = (buttonPressed) => {
        if (actualNumber === StringUtils.Empty && buttonPressed === '.' || actualNumber.indexOf('.') !== -1 && buttonPressed === '.') {
            return;
        }

        if (actualNumber === '0' && buttonPressed !== '0' && buttonPressed !== '.') {
            setActualNumber(`${buttonPressed}`);
        }
        else {
            setActualNumber(`${actualNumber}${buttonPressed}`);
        }
    };
    
    const handleOperationPress = (operationPressed) => {
        let finalNumber = parseFloat(actualNumber);
        setActualNumber(StringUtils.Empty);

        if (hasSetFunctionProperty(onOperationPress)) {
            onOperationPress(operationPressed, finalNumber);
        }
    };

    useEffect(() => {
        if (hasSetFunctionProperty(onNumberPress) && actualNumber !== StringUtils.Empty) {
            onNumberPress(actualNumber);
        }
    }, [actualNumber]);

    return (
        <StyledKeybordGroup>
            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Clear} operation={() => { handleOperationPress(Operations.Clear) }} />
                <CalculatorButton content={'7'} operation={() => { handleNumberPress(7) }} />
                <CalculatorButton content={'4'} operation={() => { handleNumberPress(4) }} />
                <CalculatorButton content={'1'} operation={() => { handleNumberPress(1) }} />
                <CalculatorButton content={'0'} operation={() => { handleNumberPress(0) }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Negative} operation={() => { handleOperationPress(Operations.Negative) }} />
                <CalculatorButton content={'8'} operation={() => { handleNumberPress(8) }} />
                <CalculatorButton content={'5'} operation={() => { handleNumberPress(5) }} />
                <CalculatorButton content={'2'} operation={() => { handleNumberPress(2) }} />
                <CalculatorButton content={'.'} operation={() => { handleNumberPress('.') }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Porcentaje} operation={() => { handleOperationPress(Operations.Porcentaje) }} />
                <CalculatorButton content={'9'} operation={() => { handleNumberPress(9) }} />
                <CalculatorButton content={'6'} operation={() => { handleNumberPress(6) }} />
                <CalculatorButton content={'3'} operation={() => { handleNumberPress(3) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Equals} operation={() => { handleOperationPress(Operations.Equals) }} />
            </StyledButtonGroup>

            <StyledButtonGroup>
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Division.interfaceSign} operation={() => { handleOperationPress(Operations.Division.interfaceSign) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Multiplication.interfaceSign} operation={() => { handleOperationPress(Operations.Multiplication.interfaceSign) }} />
                <CalculatorButton type={ButtonTypes.Operation} content={Operations.Subtraction} operation={() => { handleOperationPress(Operations.Subtraction) }} />
                <CalculatorButton type={ButtonTypes.OperationDoubleVertical} content={Operations.Sum} streach={true} operation={() => { handleOperationPress(Operations.Sum) }} />
            </StyledButtonGroup>
        </StyledKeybordGroup>
    );

};

export default Keyboard;