import React, { ChangeEvent, useEffect, useState } from 'react';
import { Text, View, TextInput, TextInputChangeEventData, NativeSyntheticEvent, PickerItemProps} from  'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import api from '../../services/api';
import PlatformCard from '../../components/PlatformCard';
import Header from '../../components/Header';
import pickerStyles from './pickerStyles';
import styles from './styles';
import { Game, GamePlatform } from '../../components/PlatformCard/types';

interface Item {
    label: string,
    value: number,
  };

const CreateRecord = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [games, setGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Item[]>([]);
    

    const placeHolder = {
        label: 'Selecione o game',
        value: null,
    };

    useEffect(() => {
        api.get('games')
        .then(response => {
            setGames(response.data);
        });
        console.log(games);
    }, []);

    const handleSelectPlatform = (platform: GamePlatform) => {
        setPlatform(platform);
        setSelectedGame("");
        setFilteredGames([]);
        let auxGames: { label: string, value: number }[] = [];
        games.map((game) => {
            if (game.platform === platform) {
                auxGames.push({
                    label: game.title,
                    value: game.id,
                });
            };
        });
        setFilteredGames(auxGames);
    };

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
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Nome"
                    placeholderTextColor="#37474f"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput 
                    style={styles.inputText} 
                    placeholder="Idade"
                    placeholderTextColor="#37474f"
                    value={age}
                    maxLength={2}
                    keyboardType="numeric"
                    onChangeText={text => setAge(text)}
                />
                <View style={styles.platformContainer}>
                    <PlatformCard 
                        platform="PC" 
                        activePlatform={platform}
                        icon="laptop" 
                        onSelectPlatform={() => handleSelectPlatform("PC")}
                    />
                    <PlatformCard 
                        platform="PLAYSTATION" 
                        activePlatform={platform}
                        icon="playstation" 
                        onSelectPlatform={() => handleSelectPlatform("PLAYSTATION")}
                    />
                    <PlatformCard 
                        platform="XBOX" 
                        activePlatform={platform}
                        icon="xbox" 
                        onSelectPlatform={() => handleSelectPlatform("XBOX")}
                    />
                </View>
                <RNPickerSelect 
                style={pickerStyles}
                    placeholder={placeHolder}
                    items={filteredGames}
                    value={selectedGame}
                    onValueChange={(value) => setSelectedGame(value)}
                    Icon={() => {
                        return (
                            <Icon 
                                name="chevron-down"
                                color="#37474f"
                                size={25}
                            />
                        );
                    }}
                />
            </View>
        </>
    );
};

export default CreateRecord;