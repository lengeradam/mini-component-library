import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    padding: 4,
    border: 1,
    iconSize: 16,
    inputHeight: 16,
    top: 5,
  },
  large: {
    height: 36,
    padding: 6,
    border: 2,
    iconSize: 24,
    inputHeight: 21,
    top: 8,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--height": styles.height + "px",
        "--padding": styles.padding + "px",
        "--border": styles.border + "px",
      }}
    >
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <VisuallyHidden>
        <label for="native-input">{label}</label>
      </VisuallyHidden>
      <NativeInput
        type="text"
        id="native-input"
        placeholder={placeholder}
        style={{ "--height": styles.inputHeight + "px", "--top": styles.top + "px" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: var(--height);
  padding: var(--padding) 0px;
  border-bottom: var(--border) solid ${COLORS.black};
  color: ${COLORS.gray700};
`;

const IconWrapper = styled.div`
  display: inline-block;
`;

const NativeInput = styled.input`
  border: none;
  height: var(--height);
  position: absolute;
  top: var(--top);
  bottom: 0;
  padding-left: 10px;
  font-weight: 700;
  color: ${COLORS.gray700};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
