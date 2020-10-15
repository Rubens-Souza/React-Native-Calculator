import Colors from "../../../shared/constants/Colors";
import styled from "styled-components/native";

export const StyledFormulaText = styled.Text`
    color: ${Colors.SoftBlack};
    text-align: right;
    font-size: 27px;
    margin-bottom: 15px;
`;

export const StyledFormulaOperationSymbolText = styled(StyledFormulaText)`
    color: ${Colors.LightBlue}
`;