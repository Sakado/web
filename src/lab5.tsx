import React, { useState, useEffect } from 'react';
import './lab5CSS.css';

interface AddCardsListProps {}

interface newCard{
    type: string;
    id: number;
    description: string;
    age: number;
    name: string;
    stockNumber: number;
    price: number
}

const AddCardsList: React.FC<AddCardsListProps> = () => {
    const [cards, setCards] = useState<newCard[]>([]);
    const [userValue, setUserValue] = useState<newCard>({ type: '',id: 0, description: '', age: 0, name: '', stockNumber: 0, price: 0 }); //modificare pentru a utiliza un obiect de tip newCard
    const [deleteCard, setDeleteCard] = useState<boolean>(false);
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

    useEffect(() => {
        const cardToCreate = JSON.parse(localStorage.getItem('todo-items') || '[]') as newCard[];
        if (cardToCreate) {
            setCards(cardToCreate);
        }
    }, []);

    const addNewCard = () => {
        if (userValue.type && userValue.id) {
            const newItems = [...cards, userValue];
            setCards(newItems);
            setUserValue({ type: '',id: 0, description: '', age: 0, name: '', stockNumber: 0, price: 0});
            localStorage.setItem('todo-items', JSON.stringify(newItems));
        }
    };

    const deleteSpecifiedCard = (index: number) => {
        setDeleteCard(true);
        setTimeout(() => {
            const remainedItems = [...cards];
            remainedItems.splice(index, 1);
            setCards(remainedItems);
            localStorage.setItem('todo-items', JSON.stringify(remainedItems));
            setDeleteCard(false);
        }, 2000);
    };


    return (
        <div className="listaCreata">
            <h1 className="textForAdaugare">Lista cardurilor de adăugat pe pagină</h1>
            <div>
                <select
                    className="userInput"
                    value={userValue.type}
                    onChange={(e) =>
                        setUserValue({ ...userValue, type: e.target.value })
                    }
                >
                    <option value="">Alegeți o opțiune</option>
                    <option value="Pepene Verde">Pepene Verde</option>
                    <option value="Pepene Galben">Pepene Galben</option>
                    <option value="Dovleac">Dovleac</option>
                </select>
                <input
                    className="userInput"
                    type="number"
                    value={userValue.id}
                    onChange={(e) =>
                        setUserValue({ ...userValue, id: parseInt(e.target.value) })
                    }
                    placeholder="Introduceti ID-ul"
                    title="Introduceti un numar intreg unic care identifica cardul"
                />
                <input
                    className="userInput"
                    value={userValue.description}
                    onChange={(e) =>
                        setUserValue({ ...userValue, description: e.target.value })
                    }
                    placeholder="Introduceti descrierea"
                />
                <input
                    className="userInput"
                    type="text"
                    value={userValue.age}
                    onChange={(e) => {
                        const ageValue = parseInt(e.target.value);
                        if (!isNaN(ageValue)) {
                            setUserValue({ ...userValue, age: ageValue });
                        }
                    }}
                    placeholder="Introduceti anul"
                    title="Introduceti anul"
                />
                <input
                    className="userInput"
                    value={userValue.name}
                    onChange={(e) =>
                        setUserValue({ ...userValue, name: e.target.value })
                    }
                    placeholder="Introduceti numele"
                />
                <input
                    className="userInput"
                    type="number"
                    value={userValue.stockNumber}
                    onChange={(e) =>
                        setUserValue({ ...userValue, stockNumber: parseInt(e.target.value) })
                    }
                    placeholder="Introduceti numarul de stoc"
                    title="Introduceti numarul de stoc"
                />
                <input
                    className="userInput"
                    type="number"
                    value={userValue.price}
                    onChange={(e) =>
                        setUserValue({ ...userValue, price: parseFloat(e.target.value) })
                    }
                    placeholder="Introduceti pretul"
                    title="Introduceti pretul"
                />
            </div>
            <button className="butonDeAdaugare" onClick={addNewCard}>
                Adaugă un card
            </button>
            <ul className={"horizontalList"}>
                {cards.map((card: newCard, position: number) => (
                    <li key={position} className="itemAdaugat">
                        <p className={"descriere"}> <b> Tipul - </b>  {card.type} </p>
                        <p className={"descriere"}> <b> ID-ul - </b> {card.id} </p>
                        <p className={"descriere"}> <b> Descrierea - </b> {card.description} </p>
                        <p className={"descriere"}> <b> Anul - </b> {card.age} </p>
                        <p className={"descriere"}> <b> Numele - </b> {card.name} </p>
                        <p className={"descriere"}> <b> Pretul - </b> {card.price} </p>
                        <p className={"descriere"}> <b> Numarul de stock - </b> {card.stockNumber} </p>
                        <button
                            className="deleteButton"
                            onClick={() => deleteSpecifiedCard(position)}
                            disabled={deleteIndex === position}
                        >
                            {deleteIndex === position ? (
                                <div className="Spinner"></div>
                            ) : (
                                'Șterge'
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddCardsList;