import { LinkOverlay } from '@chakra-ui/react';

interface LinkElementProps {
	text: string;
}
export default function LinkElement(props: LinkElementProps): JSX.Element {
	const { text } = props;

	return (
		<LinkOverlay
			href='#'
			fontSize='16px'
			display='block'
			textAlign='left'
			color='#7B5BE4'
			fontWeight='700'
			backgroundColor='#ECEAF2'
			borderRadius='24px'
			padding='4px 17px'
			mb='20px'
		>
			{text}
		</LinkOverlay>
	);
}
