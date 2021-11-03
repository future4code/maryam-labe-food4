import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import {SearchContainerStyle, RestauranteContainer} from './SearchContainerStyle';
import { useForm } from '../../hooks/Hooks';
// import { useHistory, useParams } from "react-router-dom";

const SearchPage = () => {

    // const history = useHistory();
    /* const pathParams = useParams();*/

    const {form, inputChange} = useForm({
        searchInput: '',
    })
    const [foundRestaurants, setFoundRestaurants] = useState([])
    const [exampleOfList, setExampleOfList] = useState(
            [
                {
                    id: "1",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
                    name: "Habibs",
                    description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
                    category: "Árabe",
                    deliveryTime: 60,
                    address: "Rua das Margaridas, 110 - Jardim das Flores",
                    shipping: 6
                },
                {
                    id: "10",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Ftadashii.png?alt=media&token=0e4b9b8c-3b6e-4a78-bd49-d3576657a342",
                    description: "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
                    shipping: 13,
                    address: "Travessa Reginaldo Pereira, 130 - Ibitinga",
                    deliveryTime: 50,
                    name: "Tadashii",
                    category: "Asiática"
                },
                {
                    id: "2",
                    address: "Avenida dos Papagaios, 1350 - Sta. Efigênia",
                    deliveryTime: 15,
                    shipping: 19,
                    description: "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
                    name: "McDonalds",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmcdonalds.png?alt=media&token=87a0fc52-3b8d-4475-b3e4-6ff730356121",
                    category: "Hamburguer"
                },
                {
                    id: "3",
                    deliveryTime: 20,
                    shipping: 2,
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fcantinamammaperrotta.jpg?alt=media&token=3a4e76b6-3d07-414b-8672-e624f5a10a76",
                    address: "Rua Barão do Rio Branco, 98 - Centro",
                    category: "Italiana",
                    description: "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
                    name: "Cantina Mamma Perrotta"
                },
                {
                    id: "4",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbaciodilatte.png?alt=media&token=03839175-d9b3-4024-a516-5ce2cbfc6f30",
                    description: "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
                    shipping: 10,
                    deliveryTime: 45,
                    category: "Sorvetes",
                    name: "Sorveteria Bacio di Latte",
                    address: "Travessa Junqueira de Melo, 315 - Marginal"
                },
                {
                    id: "5",
                    deliveryTime: 20,
                    address: "Alameda dos Marsupiais, 505 - Humaitá",
                    category: "Carnes",
                    description: "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
                    shipping: 18,
                    name: "Outback Steakhouse",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Foutback.png?alt=media&token=6c3af525-e6f5-4f96-b5d5-a0ad6702a838"
                },
                {
                    id: "6",
                    description: "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
                    address: "Rua Dorival Caymmi, 149 - Alto dos Ibirás",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fsotero.jpg?alt=media&token=c8760cea-f8fc-4f66-b4b3-5c937beb8fe2",
                    category: "Baiana",
                    deliveryTime: 40,
                    shipping: 4,
                    name: "Sotero Cozinha Original"
                },
                {
                    id: "7",
                    description: "O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!",
                    deliveryTime: 20,
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbotecodeportal.jpg?alt=media&token=9b85ef89-0a4b-4390-84b1-858c1d3aafa1",
                    address: "Avenida das Andorinhas, 333 - Sta. Efigênia",
                    category: "Petiscos",
                    shipping: 18,
                    name: "Boteco de Portal"
                },
                {
                    id: "8",
                    shipping: 17,
                    category: "Asiática",
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fchun-li.jpg?alt=media&token=363418d5-247a-4690-a048-e2633e1346b5",
                    name: "Chun-Li",
                    description: "Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.",
                    deliveryTime: 30,
                    address: "Rua Visconde de Mauá, 990 - Centro"
                },
                {
                    id: "9",
                    description: "Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos.",
                    deliveryTime: 20,
                    address: "Largo dos Jaguarés, 12 - Nova Bragança",
                    category: "Mexicana",
                    shipping: 3,
                    logoUrl: "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmexicanissimo.png?alt=media&token=c30a24af-4fce-47d8-9b9f-af7098e2dabe",
                    name: "Mexicaníssimo"
                }
            ]
    )

    // const [choosenRestaurant, setChoosenRestaurant] = useState([])

    // const goToDetails = (restaurant) => {
    //     setChoosenRestaurant()
    //     history.push()
    // }

        const restaurants = exampleOfList.filter((restaurant)=>{
            return(
                restaurant.name.toLowerCase().includes(form.searchInput.toLowerCase())
            )
        }).map((restaurant) =>{
        return(
            <RestauranteContainer 
            // onClick={goToDetails()}
            key={restaurant.id}>
            <img 
            alt='Restaurant'
            src={restaurant.logoUrl}/>
            <h3>{restaurant.name}</h3>
            <div>
                <p>{restaurant.deliveryTime} min</p>
                <p>Frete R${restaurant.shipping},00</p>
            </div>
            </RestauranteContainer>
        )
    })

    useEffect(() => {
        setFoundRestaurants(restaurants)
    }, [])

    return (
        <>
        <SearchContainerStyle>
            <Header/>
            <input
            type="text"         
            name="searchInput"
            value={form.searchInput}
            title="Insert the name of a restaurant"
            onChange={() => inputChange()}
            placeholder='Restaurants'
            required
            />
            { foundRestaurants ? (restaurants.length > 0 ? (restaurants) : (<p>Não econtramos :(</p>)) : (<p>Busque pelo nome dos restaurantes</p>)}
            {console.log('render')}
        </SearchContainerStyle>
        </>
    )
}

export default SearchPage
