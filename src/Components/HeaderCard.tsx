import {
	Card,
	CardBody,
	Stack,
	Text,
	Divider,
	CardFooter,
	Image,
} from '@chakra-ui/react';
import TitleElement from './Common/Title';

export default function HeaderCard(): JSX.Element {
	return (
		<Card
			maxW={432}
			borderRadius='12px'
			borderColor='#868686'
			borderWidth='2px'
			position='relative'
		>
			<div className='label-absolute'>Good fit</div>
			<CardBody py='18px' px='25px'>
				<Stack spacing='3' color='#000'>
					<TitleElement text='Revenue Based Financing' />
					<Text textAlign='left' fontSize='16px' fontWeight='600'>
						By Lendistry
					</Text>
					<Text
						textAlign='left'
						fontSize='16px'
						fontWeight='600'
						display='flex'
					>
						<Image
							src='./images/location.png'
							alt='Location'
							mr='10px'
							ml='-5px'
						/>{' '}
						Location
					</Text>
					<Text textAlign='left' fontSize='14px' fontWeight='600'>
						Get Funded in <b>12 days</b>
					</Text>
				</Stack>
			</CardBody>
			<Divider borderWidth='2px' borderColor='#868686' />
			<CardFooter py='18px' px='25px'>
				<Text fontSize='22px' fontWeight='700' color='#7B5BE4'>
					$10,000 - $1,000,000
				</Text>
			</CardFooter>
		</Card>
	);
}
