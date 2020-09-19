import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header = () => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate('Home');
    }

    return (
        <TouchableWithoutFeedback
            onPress={handleOnPress}
        >
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.textLogo1}>Best Game</Text>
                <Text style={styles.textLogo2}>Survey</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Header;