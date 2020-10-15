import Colors from "../../../shared/constants/Colors";
import styled from "styled-components/native";

export const StyledResultText = styled.Text`
    color: ${Colors.SoftBlack};
    font-weight: bold;
    font-size: 30;
`;

export const StyledEqualsSign = styled.Text`
    color: ${Colors.LightBlue};
    font-weight: bold;
    font-size: 30;
`;

export const StyledResultGroup = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.SoftBlack};
    padding-bottom: 6px;
    margin-bottom: 6px;
`;