import React from 'react';
import { Card, CardBody } from 'native-base';
import Text from './Text';

interface ConfigCardItem {
  label: string;
}
const CardItem = ({ label }: ConfigCardItem) => {
  return (
    <Card>
      <CardBody>
        <Text>{label}</Text>
      </CardBody>
    </Card>
  );
};

export default CardItem;
