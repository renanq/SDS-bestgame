import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import styles from './styles';

const Feedback = () => {
    
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Home');
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

                <Text style={styles.messageText}>Obrigado pela sua participação!</Text>

                <View style={styles.footer}>
                    <RectButton 
                        style={styles.button}
                        onPress={ handleBack }
                    >
           
                     <LinearGradient
                            // Background Linear Gradient
                            colors={['transparent', 'rgba(0,0,0,0.5)']}
                            style={styles.containerBackground}
                        />
                        <View style={styles.buttonIcon} >
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['transparent', 'rgba(0,0,0,0.5)']}
                                style={styles.containerBackground}
                            />
                            <Icon name="chevron-left" color="#FFF" size={25} />
                        </View>
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </RectButton>
                </View>
            </View>
        </>
    );
};

export default Feedback;