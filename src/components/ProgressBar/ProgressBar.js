/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "4px",
    "--borderRadiusProgressStart": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
    "--borderRadiusProgressStart": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--borderRadius": "8px",
    "--borderRadiusProgressStart": "4px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (value < 0) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }

  if (value > 98) {
    styles["--borderRadiusProgressEnd"] = 4 * (value / 100) + "px";
  } else {
    styles["--borderRadiusProgressEnd"] = "0px"
  }
  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <Progress style={styles} value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value + "%"};
  height: 100%;
  border-top-left-radius: var(--borderRadiusProgressStart);
  border-bottom-left-radius: var(--borderRadiusProgressStart);
  border-top-right-radius: var(--borderRadiusProgressEnd);
  border-bottom-right-radius: var(--borderRadiusProgressEnd);
`;

export default ProgressBar;
