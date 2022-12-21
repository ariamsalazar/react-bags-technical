import { Button, useMediaQuery } from '@chakra-ui/react';

interface ButtonProps {
	text: string;
}

export default function ButtonElement(props: ButtonProps): JSX.Element {
	const { text } = props;
	const [largerScreen] = useMediaQuery('(min-width: 1350px)');

	return (
		<Button
			px='19px'
			py='6px'
			color='#fff'
			fontSize='16px'
			height='auto'
			borderRadius='6px'
			// Background color depends on screen size
			variant={largerScreen ? 'bag-desktop' : 'bag-normal'}
		>
			{text}
		</Button>
	);
}
