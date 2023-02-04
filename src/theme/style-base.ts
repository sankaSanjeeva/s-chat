import { css } from "@emotion/react";
import tw from "twin.macro";

const stylesBase = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f4f7;

    --text-primary: #000000;
    --text-secondary: #727272;
    --text-tertiary: #a1a1a1;
  }
  .dark {
    --bg-primary: #000000;
    --bg-secondary: #131313;

    --text-primary: #ffffff;
    --text-secondary: #e1e1e1;
    --text-tertiary: #969696;
  }
  body {
    ${tw`bg-primary text-primary transition-colors duration-200`}
  }
`;

export default stylesBase;
