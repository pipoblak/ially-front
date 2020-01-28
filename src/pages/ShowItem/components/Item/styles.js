import styled from 'styled-components';
import colors from 'variables/colors';

export const Wrapper = styled.div`
  width: calc(100% - 64px);
  height: 138px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 32px;
  margin-bottom: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

export const Divisor = styled.div`
  flex: 1
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #8C8C8C;
  margin-bottom: 8px;
  text-align: left;
`;

export const SubTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #8C8C8C;
  margin-top: 8px;
  display: flex;
  align-items: center;
  
`;

export const Value = styled.span`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.primary};
  margin-left: 16px;
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #8C8C8C;
  text-align: left;
  text-decoration: none;
`;

