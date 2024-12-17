import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { styles } from './genericCard.styles';

interface Props {
  title: string;
  subTitle: string;
  backgroundColor: string;
  image: any; // This should be a URI for remote images or a static asset
  onPress?: () => void; // Optional prop to handle click or interaction
}

export const GenericCard = ({ title, subTitle, backgroundColor, image, onPress }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacity
      disabled={!onPress}
      style={[
        styles.container,
        { backgroundColor: backgroundColor ?? '#fff' }, // Default white background if not provided
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      {/* IMAGE */}
      <View style={styles.containerImage}>
        {loading ? (
          <ActivityIndicator size="small" color="#000" style={styles.imageLoader} />
        ) : null}
        <Image
          onLoadStart={() => setLoading(true)} // Trigger when image starts loading
          onLoadEnd={() => setLoading(false)} // Trigger when image finishes loading
          source={image} // Use the loading image or the actual image
          style={styles.image}
        />
      </View>
      {/* IMAGE */}

      {/* DESCRIPTION */}
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{title ?? 'Titolo mancante'}</Text>
        <Text style={styles.subTitle}>{subTitle ?? 'Descrizione mancante'}</Text>
      </View>
      {/* DESCRIPTION */}
    </TouchableOpacity>
  );
};
