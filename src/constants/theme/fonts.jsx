import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Satoshi';
        src: url(./fonts/Satoshi-Variable.ttf);
      }
      `}
  />
)

export default Fonts