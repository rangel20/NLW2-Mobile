import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/29238500?s=460&u=86c4788399b6c116edd25c97933f8fd88c21b3fc&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rangel Paolo</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Desenvolvedor de Software Web Fullstack com Javascript, amante da tecnologia Java.
        {'\n'}{'\n'}
        Matemático autodidata, apaixonado pelos códigos do universo.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
