import React, { useState } from 'react';
import { TitleBar, Text, Image, Button } from '@components';
import { Container, Content } from 'native-base';
import { globalStyles, deviceWidth, images, colors } from '@styles';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View } from './components';

const Welcome = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const slides = [{ item: 1 }, { item: 2 }, { item: 3 }, { item: 4 }];
  const renderItem = ({ item }: any) => (
    <View slide={true}>
      <Image source={images.default} />
    </View>
  );

  return (
    <Container>
      <TitleBar body={<Text title={true}>canvas</Text>} />
      <Content padder={true} contentContainerStyle={globalStyles.content}>
        <View>
          <Carousel
            data={slides}
            renderItem={renderItem}
            sliderWidth={deviceWidth}
            sliderHeight={375}
            itemWidth={285}
            onSnapToItem={index => setSelectedItem(index)}
          />
          <Pagination
            dotsLength={slides.length}
            activeDotIndex={selectedItem}
            dotStyle={globalStyles.carrousel.activeDot}
            inactiveDotStyle={globalStyles.carrousel.inactiveDot}
          />
        </View>
        <View>
          <Button block={true}>
            <Text uppercase={true} button={true}>
              sign up!
            </Text>
          </Button>
        </View>
        <View button={true}>
          <Button block={true} bordered={true} color={colors.white}>
            <Text uppercase={true} button={true} color={colors.base}>
              log in!
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Welcome;
