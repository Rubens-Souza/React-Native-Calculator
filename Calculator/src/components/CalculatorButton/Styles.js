import { Dimensions } from "react-native";

import Colors from "../../shered/constants/Colors";
import styled from "styled-components/native";

const height = 75;
const widht = 75;
const verticalMargin = 6;

const buttonTotalHeight = height + verticalMargin;

export const StyledNumberButton = styled.TouchableOpacity`
    background-color: ${Colors.BluishLightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    height: ${height}px;
    width: ${widht}px;
    margin: ${verticalMargin}px 1px;
`;

export const StyledNumberButtonText = styled.Text`
    color: ${Colors.SoftBlack};
    font-size: 27px;
    text-align: center;
    font-weight: bold;
`;

export const StyledOperationButton = styled(StyledNumberButton)`
    background-color: ${Colors.LightBlue};
`;

export const StyledOperationButtonText = styled(StyledNumberButtonText)`
    color: ${Colors.White};
`;

export const StyledDoubleVerticalOperationButton = styled(StyledOperationButton)`
    height: ${buttonTotalHeight * 2}px;
    width: ${widht}px;
`;