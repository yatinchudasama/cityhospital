import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../Test/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useDispatch, useSelector } from 'react-redux';
import { LODING_MEDICINES } from '../../reducx/ActionType';
import CircularProgress from '@mui/material/CircularProgress';
import { addtocart } from '../../slice/cart.slice';
import { getmedicines } from '../../slice/medisin.slice';



const medisin = [
    {
        "id": 1,
        "name": "Naproxen",
        "price": 85,
        "expiry": 2023,
        "desc": "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever.",
    },
    {
        "id": 2,
        "name": "Jakafi",
        "price": 85,
        "expiry": 2023,
        "desc": "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone."
    },
    {
        "id": 3,
        "name": "Hydrea",
        "price": 85,
        "expiry": 2023,
        "desc": "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck."
    },
    {
        "id": 4,
        "name": "Hiprex",
        "price": 85,
        "expiry": 2023,
        "desc": "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane"
    },
    {
        "id": 5,
        "name": "Meftal",
        "price": 85,
        "expiry": 2023,
        "desc": "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods)."
    },
    {
        "id": 6,
        "name": "Wegovy",
        "price": 85,
        "expiry": 2023,
        "desc": "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity"
    },
    {
        "id": 7,
        "name": "Aripiprazole",
        "price": 85,
        "expiry": 2023,
        "desc": "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type)."
    },
    {
        "id": 8,
        "name": "Orlistat",
        "price": 85,
        "expiry": 2023,
        "desc": "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake."
    }
]
function Medisin({ increment, fav, setFav }) {



    // const [medicins, setMedicins] = useState(medisin)
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [cart, setCart] = useState('')
    const [mdata, setMdata] = useState('')



    // let localData = JSON.parse(localStorage.getItem("medisin"));
    // console.log(localData);
    const medisines = useSelector(state => state.medisines)
    console.log(medisines);

    const dispatch = useDispatch()
    const getData = () => {
        // let localData = JSON.parse(localStorage.getItem("medisin"))
        // setMdata(localData)
        dispatch(getmedicines())
    }

    useEffect(() => {
        getData();
    }, [])

    const handalsearchSort = () => {
        console.log('yyyy');

        let localData = JSON.parse(localStorage.getItem("medisin"));
        // console.log(localData);

        let Data = localData.filter((v) => {
            return (
                v.name.toLowerCase().includes(search.toLowerCase()) ||
                v.price.toString().includes(search.toString())
            )

        })

        Data = Data.sort((a, b) => {
            if (sort === 'az') {
                return a.name.localeCompare(b.name)
            } else if (sort === 'za') {
                return b.name.localeCompare(a.name)
            } else if (sort === 'low') {
                return a.price - b.price;
            } else if (sort === 'high') {
                return b.price - a.price;
            }
        })
        console.log(Data);

        return Data
    }

    const finalData = handalsearchSort()

    const handleAddCart = (id) => {
        // console.log('yyyyyy');
        // increment((prev) => prev + 1)
        // dispatch(addtocart(id))
        dispatch(({id: id, qty: 1}))

    }

    const handleFavirote = (id) => {
        if (fav.includes(id)) {
            let fData = fav.filter((v) => v !== id)
            setFav(fData)
        } else {
            setFav((prev) => [...prev, id])
        }

    }
    console.log(fav);

    const handleRemove = (id) => {

    }
    return (
        <div className='container'>
            <br></br><br></br>
            {
                medisines.isLoding ? <CircularProgress /> :
                medisines.error ? <p>{medisines.error}</p> :
                
                    medisines.medisines.map((v) => {
                        <>
                            <input placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>

                            <select onChange={(e) => setSort(e.target.value)}>
                                <option value='0'>--select--</option>
                                <option value='low'>Low price</option>
                                <option value='high'>high price</option>
                                <option value='a'>A to Z</option>
                                <option value='z'>Z to A</option>
                            </select>
                        </>
                        return (
                            <section id="doctors" className="doctors">
                                <div className="container">
                                    <div className="section-title">

                                        <Card
                                            title={v.name}
                                            subtitle={v.price}
                                            btnvalue='Add to Cat'
                                            btnClick={() => handleAddCart(v.id)}
                                            favClick={() => handleFavirote(v.id)}
                                            remClick={() => handleRemove(v.id)}
                                            favState={fav.includes(v.id) ? true : false}
                                        // icon ={<FavoriteIcon/>}
                                        />


                                    </div>
                                </div>
                            </section>
                        )
                    })
            }


        </div>
    );
}

export default Medisin;