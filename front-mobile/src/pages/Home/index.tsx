import React from 'react';
import { View, Image, Text } from 'react-native';
import{ useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import gamer from '../../assets/gamer.png';
import styles from './styles';

const Home = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('CreateRecord');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,1)', 'transparent', 'transparent']}
                    style={styles.containerBackground}
                />
                <Image source={gamer} style={styles.gamerImage} />
                <Text style={styles.title}>VOTE AGORA!</Text>
                <Text style={styles.subTitle}>Nos diga qual o seu jogo predileto.</Text>
                <View style={styles.footer}>
                    <RectButton 
                        style={styles.button}
                        onPress={handleOnPress}
                    >
           
                     <LinearGradient
                            // Background Linear Gradient
                            colors={['transparent', 'rgba(0,0,0,0.5)']}
                            style={styles.containerBackground}
                        />
                        <Text style={styles.buttonText}>PARTICIPE</Text>
                        <View style={styles.buttonIcon} >
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['transparent', 'rgba(0,0,0,0.5)']}
                                style={styles.containerBackground}
                            />
                            <Icon name="chevron-right" color="#FFF" size={25} />
                        </View>
                    </RectButton>
                </View>
            </View>
        </>
    );
};

export default Home;