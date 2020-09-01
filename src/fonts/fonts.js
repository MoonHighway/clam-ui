import { createGlobalStyle } from "styled-components";

import Catamaran from "./Catamaran-ExtraBold.ttf";
import Roboto from "./Roboto-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Catamaran';
        src: local('Catamaran'), local('Catamaran'),
        url(${Catamaran}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${Roboto}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
`;
