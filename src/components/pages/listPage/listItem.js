import React, {useEffect, useState} from 'react';
// import json from '../../../db.json';
// import AppHeader from '../../appHeader/appHeader';
import plus from '../../../img/plus.svg';


const ListItem = ({toggleList,  data}) => {
    const [items, setItem] = useState([]);
    const getData = () => {
    const {jsonArr} = data;
        fetch(`http://localhost:3000/${jsonArr}`
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
            .then(response => response.json())
            .then(data => setItem(data));
            // let json = await response.json();
            // return json.books;
    }
    useEffect(() => {
        getData();
    }, [])


    const [checkbox, setCheckbox] = useState(0);
    const handleInputChange = (event) => {
        const target = event.target;
        target.checked ? setCheckbox(checkbox + 1) : setCheckbox(checkbox - 1);
    }

    return (
        <div className="d-flex flex-sm-column scroll bg-white">
            <div className="overflow">
                <div class="name_plus">
                    <span class="name-title" href="">{data.nameTitle}</span>
                    <div onClick={toggleList}><img src={plus} alt="add"/></div>
                </div>
                <div class="rating">
                    <p class="number">{checkbox}/{items.length}</p>
                    <img class="scale" src="../img/line3.png"/>
                </div> 
                {
                    items.map((item, index) => {
                        return (
                            <label className="checkbox d-flex" key={index}>
                                <input type="checkbox" onChange={handleInputChange} />
                                <p>{item.title}</p>
                            </label>
                        )
                    })
                }
            </div>
            <div class="exit-btn btn1">
                <button class="btnn" type="btn" name="exit">Показать завершенные</button>
            </div>
        </div>
    );
}



export default ListItem; 