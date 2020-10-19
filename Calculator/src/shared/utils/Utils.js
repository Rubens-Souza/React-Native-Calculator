import Operations from "../constants/Operations";

export const hasSetFunctionProperty = (value) => typeof(value) === "function";

export const formatDivisionSigns = (expression) => expression.replace(Operations.Division.interfaceSign, Operations.Division.operationSign);

export const formatMultiplicationSigns = (expression) => expression.replace(Operations.Multiplication.interfaceSign, Operations.Multiplication.operationSign);