import React, { useState, useEffect } from 'react';
import './styles.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Cadastro () {

    const[id_category, SetIdCategory] = useState(0)
    const[name, SetName] = useState('')
    const[price, setPrice] = useState()
    const[quantity, setQuantity] = useState()
    const[image_adress, setImageAdress] = useState('')
    const[brand, SetBrand] = useState('')
    const[genre, SetGenre] = useState('')
    const[age_range, SetAgeRange] = useState('')
    const[category, SetCategory] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('/category').then(response => {
            SetCategory(response.data.data)
        });
    },[])

    function HandleFilter(e) {
        e.preventDefault();

        SetIdCategory(e.target.value);

    }

    async function HandleProducts(e) {
        e.preventDefault();

        const email = "vendendor@test.com"
        const password = "vendendor321"

        const data = {
            email,
            password,
            id_category,
            name,
            price,
            quantity,
            image_adress,
            brand,
            genre,
            age_range
        };

        try {
            const response = await api.post('/products', data);

            alert("Produto Cadastrado com Sucesso!");

            history.push('/login');

        }catch(err) {
            alert(`Erro no cadastro, ${err}!`);
        }
    }

    return (
        <div className="container-cadastro">
            <h1 id="title">Cadastrar Item</h1>

            <form onSubmit={HandleProducts} className="container-newitens">
                <select id="button-select" onChange={HandleFilter}>
                    <option value={-1}>Escolha a Categoria </option>
                    {category.map(item => (
                        <option value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <input type="text"
                       id="input-name"
                       placeholder="Digite o Nome do Item"
                       value={name}
                       onChange={e => SetName(e.target.value)}
                />
                <input type="number"
                       id="input-name"
                       placeholder="Digite a Quantidade"
                       value={quantity}
                       onChange={e => setQuantity(e.target.value)}
                />
                <input type="text"
                       id="input-name"
                       placeholder="Digite o Valor do Item"
                       value={price}
                       onChange={e => setPrice(e.target.value)}
                />
                <input type="text"
                       id="input-name"
                       placeholder="Link do Item"
                       value={image_adress}
                       onChange={e => setImageAdress(e.target.value)}
                />
                <input type="text"
                       id="input-name"
                       placeholder="Marca do Produto"
                       value={brand}
                       onChange={e => SetBrand(e.target.value)}
                />
                <input type="text"
                       id="input-name"
                       placeholder="Gênero"
                       value={genre}
                       onChange={e => SetGenre(e.target.value)}
                />
                <input type="text"
                       id="input-name"
                       placeholder="Faixa etária"
                       value={age_range}
                       onChange={e => SetAgeRange(e.target.value)}
                />
                <br></br>
                    <input type="submit" value="Cadastrar Item" className="login-submit" />
            </form>
        </div>
    );
}