import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/Theme/theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	// Chakra provider theme
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
reportWebVitals();
