import React from 'react';

import styled, { keyframes } from 'styled-components';

const pulsate = keyframes`
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 1.0;
  }

  100% {
    opacity: 0.4;
  }
`;

const PulsatingCircle = styled.circle`
  animation: ${pulsate} 3s ease-in-out infinite;
`;

const Wrapper = styled.svg`
  ${props => (props.height ? `height: ${props.height};` : null)}
  ${props => (props.width ? `width: ${props.width};` : null)}
`;

const Logo = ({ height, width, title }) => (
  <Wrapper
    height={height}
    width={width}
    viewBox="0 0 255 86"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{title}</title>
    <g id="Wordmark" fill="none" fillRule="evenodd">
      <g id="Group" fill="currentColor">
        <path
          d="M23.52,85.44 C19.6799808,85.44 15.6200214,84.6800076 11.34,83.16 C7.0599786,81.6399924 3.3600156,79.6000128 0.24,77.04 L9.36,64.32 C14.8000272,68.32002 19.6799784,70.32 24,70.32 C26.1600108,70.32 27.6999954,70.020003 28.62,69.42 C29.5400046,68.819997 30,67.920006 30,66.72 C30,65.919996 29.6800032,65.220003 29.04,64.62 C28.3999968,64.019997 27.5400054,63.4600026 26.46,62.94 C25.3799946,62.4199974 24.1600068,61.9200024 22.8,61.44 C21.4399932,60.9599976 20.0000076,60.4000032 18.48,59.76 C16.7199912,59.0399964 14.940009,58.180005 13.14,57.18 C11.339991,56.179995 9.7200072,54.9600072 8.28,53.52 C6.8399928,52.0799928 5.6600046,50.4200094 4.74,48.54 C3.8199954,46.6599906 3.36,44.4800124 3.36,42 C3.36,39.0399852 3.9399942,36.360012 5.1,33.96 C6.2600058,31.559988 7.8799896,29.5200084 9.96,27.84 C12.0400104,26.1599916 14.5399854,24.8600046 17.46,23.94 C20.3800146,23.0199954 23.5999824,22.56 27.12,22.56 C32.0800248,22.56 36.3399822,23.3799918 39.9,25.02 C43.4600178,26.6600082 46.5599868,28.47999 49.2,30.48 L40.08,42.72 C37.9199892,41.119992 35.8000104,39.8800044 33.72,39 C31.6399896,38.1199956 29.6800092,37.68 27.84,37.68 C24.3199824,37.68 22.56,38.7999888 22.56,41.04 C22.56,41.840004 22.859997,42.5199972 23.46,43.08 C24.060003,43.6400028 24.8799948,44.1599976 25.92,44.64 C26.9600052,45.1200024 28.1599932,45.5799978 29.52,46.02 C30.8800068,46.4600022 32.3199924,46.9599972 33.84,47.52 C35.6000088,48.1600032 37.3999908,48.9599952 39.24,49.92 C41.0800092,50.8800048 42.7399926,52.059993 44.22,53.46 C45.7000074,54.860007 46.8999954,56.5399902 47.82,58.5 C48.7400046,60.4600098 49.2,62.7999864 49.2,65.52 C49.2,68.320014 48.6400056,70.9399878 47.52,73.38 C46.3999944,75.8200122 44.7600108,77.939991 42.6,79.74 C40.4399892,81.540009 37.760016,82.939995 34.56,83.94 C31.359984,84.940005 27.6800208,85.44 23.52,85.44 Z M74.88,85.44 C72.079986,85.44 69.5600112,84.940005 67.32,83.94 C65.0799888,82.939995 63.1800078,81.6000084 61.62,79.92 C60.0599922,78.2399916 58.880004,76.2800112 58.08,74.04 C57.279996,71.7999888 56.88,69.4400124 56.88,66.96 C56.88,60.7199688 59.4399744,55.8200178 64.56,52.26 C69.6800256,48.6999822 77.9999424,46.320006 89.52,45.12 C89.0399976,40.9599792 86.2400256,38.88 81.12,38.88 C78.9599892,38.88 76.680012,39.2999958 74.28,40.14 C71.879988,40.9800042 69.1200156,42.2399916 66,43.92 L58.8,30.48 C63.0400212,27.9199872 67.3199784,25.9600068 71.64,24.6 C75.9600216,23.2399932 80.4799764,22.56 85.2,22.56 C92.9600388,22.56 99.0599778,24.7799778 103.5,29.22 C107.940022,33.6600222 110.16,40.7999508 110.16,50.64 L110.16,84 L93.36,84 L91.92,78.24 L91.44,78.24 C89.039988,80.4000108 86.5000134,82.1399934 83.82,83.46 C81.1399866,84.7800066 78.1600164,85.44 74.88,85.44 Z M82.08,69.6 C83.7600084,69.6 85.1399946,69.2200038 86.22,68.46 C87.3000054,67.6999962 88.3999944,66.720006 89.52,65.52 L89.52,57.36 C84.5599752,58.0800036 81.1600092,59.1599928 79.32,60.6 C77.4799908,62.0400072 76.56,63.5999916 76.56,65.28 C76.56,68.1600144 78.3999816,69.6 82.08,69.6 Z M145.44,85.44 C141.679981,85.44 138.300015,84.7200072 135.3,83.28 C132.299985,81.8399928 129.740011,79.7600136 127.62,77.04 C125.499989,74.3199864 123.860006,71.0200194 122.7,67.14 C121.539994,63.2599806 120.96,58.8800244 120.96,54 C120.96,49.1199756 121.659993,44.7200196 123.06,40.8 C124.460007,36.8799804 126.299989,33.5800134 128.58,30.9 C130.860011,28.2199866 133.479985,26.1600072 136.44,24.72 C139.400015,23.2799928 142.399985,22.56 145.44,22.56 C148.720016,22.56 151.39999,23.0999946 153.48,24.18 C155.56001,25.2600054 157.519991,26.7199908 159.36,28.56 L158.64,19.92 L158.64,0.48 L179.28,0.48 L179.28,84 L162.48,84 L161.04,78.48 L160.56,78.48 C158.47999,80.5600104 156.100013,82.2399936 153.42,83.52 C150.739987,84.8000064 148.080013,85.44 145.44,85.44 Z M150.96,68.64 C152.560008,68.64 153.959994,68.340003 155.16,67.74 C156.360006,67.139997 157.519994,66.0000084 158.64,64.32 L158.64,42.24 C157.439994,41.1199944 156.120007,40.360002 154.68,39.96 C153.239993,39.559998 151.840007,39.36 150.48,39.36 C148.319989,39.36 146.380009,40.4399892 144.66,42.6 C142.939991,44.7600108 142.08,48.4799736 142.08,53.76 C142.08,59.2000272 142.859992,63.0399888 144.42,65.28 C145.980008,67.5200112 148.159986,68.64 150.96,68.64 Z M211.68,85.44 C208.159982,85.44 205.220012,84.9000054 202.86,83.82 C200.499988,82.7399946 198.600007,81.20001 197.16,79.2 C195.719993,77.19999 194.700003,74.8200138 194.1,72.06 C193.499997,69.2999862 193.2,66.2400168 193.2,62.88 L193.2,0.48 L213.84,0.48 L213.84,63.6 C213.84,65.6800104 214.219996,67.0799964 214.98,67.8 C215.740004,68.5200036 216.479996,68.88 217.2,68.88 L218.22,68.88 C218.500001,68.88 218.879998,68.8000008 219.36,68.64 L221.76,83.76 C220.639994,84.2400024 219.260008,84.6399984 217.62,84.96 C215.979992,85.2800016 214.000012,85.44 211.68,85.44 Z"
          id="sadl"
        />
        <PulsatingCircle id="Oval" fillRule="nonzero" cx="242" cy="74" r="12" />
      </g>
    </g>
  </Wrapper>
);

Logo.defaultProps = {
  title: 'Simon Andrews Development Limited',
};

export default Logo;
