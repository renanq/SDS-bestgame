import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import styles from './styles';
import { GamePlatform } from './types';

type Props = {
    platform: GamePlatform;
    activePlatform?: GamePlatform;
    icon: string;
    onSelectPlatform: (platform: GamePlatform) => void;
}

const PlatformCard = ({ 
    platform, 
    activePlatform,
    icon, 
    onSelectPlatform }: Props) => {

    const isActive = platform === activePlatform;
    const bgActive = isActive ? '#fcd7e6' : '#FFF';
    const colorActive = isActive ? '#ff0066' : '#37474f';

    return (
        <RectButton 
            style={[styles.platformCard, { backgroundColor: bgActive }]}
            onPress={() => onSelectPlatform (platform)}
        >
            <Icon name={icon} size={60} color={colorActive}/>
            <Text style={[styles.platformCardText, {color: colorActive}]}>
                {platform === "PLAYSTATION" ? 'PS' : platform}
            </Text>
        </RectButton>
    );
};

export default PlatformCard;