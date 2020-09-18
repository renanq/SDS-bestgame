import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={logo} />
            <Text style={styles.textLogo1}>Best Game</Text>
            <Text style={styles.textLogo2}>Survey</Text>
        </View>
    );
};

export default Header;