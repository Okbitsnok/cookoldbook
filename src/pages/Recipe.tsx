import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    // const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    console.log(recipe)

    return (
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iusto nisi obcaecati odit quasi repudiandae sunt unde! Asperiores, consectetur reprehenderit.</div>
    );
}

export { Recipe };
