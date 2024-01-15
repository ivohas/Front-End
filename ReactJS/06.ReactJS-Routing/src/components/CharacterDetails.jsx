import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    console.log(location.pathname);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((err) => {
                navigate('/characters');
            });
    }, [id]);

    return (
        <>
            <h1>{character.name}</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam consequatur libero adipisci veniam reiciendis facere iusto aliquid officiis, neque quam fuga voluptates voluptatem, sit, veritatis recusandae impedit alias! Ut, ipsam.</p>
        </>
    );
}

export default CharacterDetails;
