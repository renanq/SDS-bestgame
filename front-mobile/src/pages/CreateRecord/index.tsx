import React from 'react';
import { Text, View } from  'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';
import styles from './styles';

const CreateRecord = () => {
    return (
        <>
            <Header />
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,1)', 'transparent', 'transparent']}
                    style={styles.containerBackground}
                />
                <Text>oba</Text>
            </View>
        </>
    );
};

export default CreateRecord;