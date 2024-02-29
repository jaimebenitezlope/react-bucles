import { CARD_DATA } from '../../constants/card-data';
import Card from '../card/Card';
import { StyledMainContainer } from './main-container.styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			{CARD_DATA.map(card => (
				<Card key={card.id} {...card} />
			))}
		</StyledMainContainer>
	);
};

export default MainContainer;
