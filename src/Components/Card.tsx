import { Card, CardBody, Stack, Heading, Text } from '@chakra-ui/react';
import ButtonElement from './Common/Button';
import LinkElement from './Common/Link';
import HeaderCard from './HeaderCard';

export default function CardElement(): JSX.Element {
	return (
		<Card
			maxW={432}
			className='absolute-element'
			borderRadius='12px'
			borderColor='#C8C6C6'
			borderWidth='2.25px'
		>
			<HeaderCard />
			<CardBody padding={25}>
				<Stack spacing='3' mb='30px'>
					<Heading
						size='md'
						textAlign='left'
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<Text fontSize='20px'>About the Lender</Text>
						<ButtonElement text='Learn More' />
					</Heading>
					<Text textAlign='left' fontSize='16px' lineHeight='22px'>
						Fill with Lorem ipsum dhfe ndwufiu fheh u2en i19h ueu2 0 he ns
						asabsqh sw whhdi dw ppwd euy4h dbdjq jeeoi nd.
					</Text>
				</Stack>
				<LinkElement text='Lender Benefit' />
				<LinkElement text='Lender Benefit' />
				<LinkElement text='Lender Benefit' />
			</CardBody>
		</Card>
	);
}
