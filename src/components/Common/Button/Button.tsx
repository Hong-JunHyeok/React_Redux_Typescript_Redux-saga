import React, { CSSProperties } from 'react';
import './Button.scss';
import { AiFillGithub } from 'react-icons/ai';

interface PropsType {
  handleFunc?: () => void;
  customStyle?: CSSProperties;
  children?: React.ReactNode;
}

const Button = ({ handleFunc, customStyle, children }: PropsType) => {
  return (
    <div onClick={handleFunc} style={customStyle} className="Button">
      {children}
    </div>
  );
};

export default Button;

interface GithubPropsType {
  link: string;
}

export const GithubButton = ({ link }: GithubPropsType) => {
  return (
    <Button
      handleFunc={() => {
        window.open(link, '_blank');
      }}
      customStyle={{
        backgroundColor: '#343a40',
        width: '150px',
        fontSize: '18px',
        position: 'fixed',
        right: '10px',
        bottom: '30px',
      }}
    >
      <AiFillGithub />
      Github바로가기
    </Button>
  );
};
