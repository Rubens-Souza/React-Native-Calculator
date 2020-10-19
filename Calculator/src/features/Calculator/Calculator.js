import React, { useState, useEffect } from "react";

import Display from "../Display/Display";
import Keyboard from "../Keyboard/Keyboard";

import { StyledSafeAreaView } from "./Styles";

import Operations from "../../shared/constants/Operations";
import StringUtils from "../../shared/utils/StringUtils";
import NumberUtils from "../../shared/utils/NumberUtils";
import { OperationCharacter } from "../../shared/utils/RegexExpressions";

import { formatDivisionSigns, formatMultiplicationSigns } from "../../shared/utils/Utils";

const Calculator = () => {

    const [actualOperation, setActualOperation] = useState("");
    const [numbers] = useState(new Array(2));
    const [expression, setExpression] = useState("");
    const [actualNumberIndex, setActualNumberIndex] = useState(0);
    const [result, setResult] = useState();

    const handleNumberPress = (number) => {
        if (actualOperation === StringUtils.Empty && actualNumberIndex !== 0) {
            return;
        }

        setNumberAt(number, actualNumberIndex);
    };

    const handleOperationPress = (operation, finalNumber) => {
        if (operation === Operations.Clear) {
            clearExpression();
            return;
        }

        let expressionResult;
        if (actualNumberIndex === 1) {
            setNumberAt(finalNumber, actualNumberIndex);
            expressionResult = calculateExpression(expression);
        }
        else if (actualNumberIndex === 0) {
            setActualOperation(operation);
            setNumberAt(finalNumber, actualNumberIndex);
            setActualNumberIndex(actualNumberIndex + 1);
        }

        if (operation === Operations.Equals) {
            clearExpression();
            setActualNumberIndex(1);
            setResult(expressionResult);
            setNumberAt(expressionResult, 0);
            setActualOperation(StringUtils.Empty);
        }
        else if (operation === Operations.Percent) {
            let percentResult = calculateExpression(`(${expression})/100`);
            clearExpression();
            setActualNumberIndex(1);
            setResult(percentResult);
            setNumberAt(percentResult, 0);
            setActualOperation(StringUtils.Empty);
        }
        else if (operation === Operations.Negative) {
            let negationResult = expressionResutl = calculateExpression(`-(${expression})`);
            clearExpression();
            setActualNumberIndex(1);
            setResult(negationResult);
            setNumberAt(negationResult, 0);
            setActualOperation(StringUtils.Empty);
        }
        else if (actualNumberIndex === 1) {
            setResult(expressionResult);
            setNumberAt(expressionResult, 0);
            setNumberAt(0, actualNumberIndex);
            setActualOperation(operation);
        }
    };
    
    const clearExpression = () => {
        setActualNumberIndex(0);
        numbers[0] = 0;
        numbers[1] = 0;

        setActualOperation(StringUtils.Empty);
        setResult(StringUtils.Empty);
        setExpression('0');
    };

    const calculateExpression = (formula) => {
        let formattedFormula = formatDivisionSigns(formatMultiplicationSigns(formula));
        try {
            return eval(formattedFormula);
        }
        catch {
            return undefined;
        }     
    };

    useEffect(() => { updateExpression(); }, [actualOperation]);

    const setNumberAt = (value, index) => {
        if (index >= numbers.length) {
            return;
        }

        numbers[index] = value;
        updateExpression();
    };

    const updateExpression = () => {
        setExpression(`${StringUtils.getDefaultIfEmpty(numbers[0])} ${StringUtils.getDefaultIfBlank(actualOperation)} ${StringUtils.getDefaultIfEmpty(numbers[1])}`);
    };

    return (
        <StyledSafeAreaView>
            <Display formula={expression} value={result} />
            <Keyboard onNumberPress={handleNumberPress} onOperationPress={handleOperationPress} />
        </StyledSafeAreaView>
    );
};

export default Calculator;