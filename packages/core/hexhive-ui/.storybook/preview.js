import { Grommet } from "grommet";
import {BaseStyle} from '@hexhive/styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <Grommet style={{flex: 1}} theme={BaseStyle}>
      <Story />
    </Grommet>
  ),
];