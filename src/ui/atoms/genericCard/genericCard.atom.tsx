import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './genericCard.styles';

interface Props {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any;
}

export const GenericCard = ({ title, subTitle, backgroundColor, image }: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor ?? 'aqua',
        },
      ]}>
      {/* IMAGE */}
      <View style={styles.containerImage}>
        <Image
          source={image ?? require('../../../../assets/images/logo.jpg')}
          style={styles.image}
        />
      </View>
      {/* IMAGE */}

      {/* DESCRIPTION */}
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{title ?? 'Titolo mancante'}</Text>
        <View style={styles.containerSubtTitle}>
          <Text>{subTitle ?? 'Descrizione mancante'}</Text>
        </View>
      </View>
      {/* DESCRIPTION */}
    </View>
  );
};
