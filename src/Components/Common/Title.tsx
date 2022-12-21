import { Text } from '@chakra-ui/react';

interface TitleElementProps {
	text: string;
}

export default function TitleElement(props: TitleElementProps): JSX.Element {
	const { text } = props;
	return (
		<Text
			fontSize={{ base: '16px', md: '20px', lg: '24px' }}
			textAlign='left'
			fontWeight='700'
			color='#000'
		>
			{text}
		</Text>
	);
}
