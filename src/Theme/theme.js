import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	components: {
		Button: {
			baseStyle: {
				fontWeight: '700',
			},
			sizes: {
				sm: {
					width: '130px',
					height: 'auto',
				},
			},
			variants: {
				'bag-normal': {
					bg: '#000',
				},
				'bag-desktop': {
					bg: '#0051ff',
				},
			},
			defaultProps: {
				size: 'lg',
				variant: 'sm',
				colorScheme: 'blue',
			},
		},
	},
});

export default theme;
