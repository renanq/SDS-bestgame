import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import api from '../../services/api';
import { Platform } from '../Records/types';
import './styles.css';

interface Game {
    id: number;
    title: string;
    platform: Platform;
  };

const CreateRecord = () => {

    const history = useHistory();

    const [selectedPlatform, setSelectedPlatform] = useState<Platform>();
    const [selectedGame, setSelectedGame] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gameId: '',
      });
    const [games, setGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    useEffect(() => {
        api.get("games")
            .then(response => {
                setGames(response.data);
            });
    }, []);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectPlatform = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as Platform;
        setSelectedPlatform(value);
        setSelectedGame("");
        setFilteredGames([]);
        let auxGames: Game[] = [];
        games.map(game => {
            if (game.platform === value) {
                auxGames.push(game);
            };
            return null;
        });
        setFilteredGames(auxGames);
    };

    function handleSelectGame(event: ChangeEvent<HTMLSelectElement>) {
        const gameId = event.target.value;
        setFormData({...formData, gameId});
      };
    
    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        
        await api.post("records", formData)
            .catch(err => {
                //erro
                alert("Erro inesperado. Tente novamente mais tarde.");
            })
            .then(response => {
                //success
                alert("Obrigado pela sua participação!");
                history.push('/');
            });
    };

    return (
        <div className="create-record-container">
            <h1>Escolha seu game favorito</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    />
                </div>

                <div className="field">
                    <label htmlFor="age">Idade</label>
                    <input 
                    type="Number"
                    name="age"
                    id="age"
                    onChange={handleInputChange}
                    value={formData.age}
                    />
                </div>

                <div className="field">
                    <label htmlFor="platform">Plataforma</label>
                    <select 
                        name="platform" 
                        id="platform" 
                        value={selectedPlatform} 
                        onChange={handleSelectPlatform}
                    >
                        <option value="">Selecione uma Plataforma</option>
                        <option value="PC">PC</option> 
                        <option value="PLAYSTATION">PLAYSTATION</option> 
                        <option value="XBOX">XBOX</option> 
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="game">Jogo</label>
                    <select 
                        name="game" 
                        id="game" 
                        value={selectedGame} 
                        onChange={handleSelectGame}
                    >
                        <option value="">Selecione o jogo</option>
                        {filteredGames.map(game => (
                        <option key={game.id} value={game.id}>{game.title}</option>  
                        ))}
                        
                    </select>
                </div>

                <button
                    type="submit"
                >
                    <strong>
                        SALVAR
                    </strong>
                    <span>
                        <Arrow />
                    </span>
                </button>
            </form>
        </div>
    );
};

export default CreateRecord;