import { createGlobalStyle } from 'styled-components'

import Bebas from './BebasNeue-Regular.ttf'

export default createGlobalStyle`
@font-face {
	font-family: 'BebasNeue';
	src: url(${Bebas}) format('ttf');
	font-weight: 300;
	font-style: normal;
}

`