import React, { useState } from 'react';
import { TitleBar, Text, Image, Button } from '@components';
import { Container, Content } from 'native-base';
import { globalStyles, deviceWidth, images, colors } from '@styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View } from './components';
import { push } from '@config/navigation/behaviors';
import {
  WELCOME_SCREEN,
  REGISTER_SCREEN,
  LOGIN_SCREEN,
} from '@config/navigation/screenNames';

const Welcome = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const slides = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }];

  const onPress = (screen: string): void => {
    push(WELCOME_SCREEN, screen);
  };
  const renderItem = ({ item }: any) => (
    <View slide={true}>
      <Image source={images.default} />
    </View>
  );

  return (
    <Container>
      <TitleBar body={<Text title={true}>canvas</Text>} />
      <Content padder={true} contentContainerStyle={globalStyles.content}>
        <View container>
          <Carousel
            data={slides}
            renderItem={renderItem}
            sliderWidth={deviceWidth}
            sliderHeight={300}
            itemWidth={285}
            onSnapToItem={SlideIndex => setSelectedItem(SlideIndex)}
          />
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={selectedItem}
            dotStyle={globalStyles.carrousel.activeDot}
            inactiveDotStyle={globalStyles.carrousel.inactiveDot}
          />
        </View>
        <View button>
          <Button
            block
            color={colors.base}
            onPress={() => onPress(REGISTER_SCREEN)}
          >
            <Text uppercase button>
              sign up!
            </Text>
          </Button>
        </View>
        <View button>
          <Button
            block
            bordered
            bgColor={colors.white}
            onPress={() => onPress(LOGIN_SCREEN)}
          >
            <Text uppercase button color={colors.base}>
              log in!
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Welcome;
