import styled from "@emotion/styled";
import { theme } from "../themes/theme";


const HeaderHeadline = styled.h1`
    color: ${({primary, secondary, tertiary, fourth}) => (
        primary ? theme.colors.primary : secondary ? theme.colors.secondary : tertiary ? theme.colors.tertiary : fourth ? theme.colors.fourth : theme.colors.standard
    )};
    font-size: 2.25rem;
    letter-spacing: 0.1rem;
    margin: 0;
    font-family: Oswald, sans-serif;
    text-align: center;
    padding-top: 1.5rem;
    text-shadow: 0 3px 3px #3dd2cd79;
    font-weight: 400;
`

export default HeaderHeadline;