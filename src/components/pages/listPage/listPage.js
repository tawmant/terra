import React, {useState} from 'react';
import AddItem from './listComponents/addItem'
import ListItem from './listItem';
// import Service from '../../services/services';

const ListPage = () => {

    const [toggle, setToggle] = useState(false);

    const modal = toggle ? <AddItem toggle={toggle} setToggle={setToggle} hideModal={() => hideModal()}/> : null;

    const toggleList = () => setToggle(!toggle);

    const hideModal = () => setToggle(!toggle);

    const list = document.querySelector('.list')

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && toggle === true) { 
            setToggle(!toggle);
        }
    });

    const data = {
        books: {nameTitle: 'Книги', jsonArr: 'books'},
        films: {nameTitle: 'Фильмы', jsonArr: 'films'},
        travels: {nameTitle: 'Путешествия', jsonArr: 'travels'},
        desires: {nameTitle: 'Желания', jsonArr: 'desires'},
    }

    return (
        <div className="list float-start" onClick={e => e.target === list && toggle === true ? setToggle(!toggle) : null}>
            <div className="d-flex justify-content-around">
                <ListItem toggleList={toggleList} data={data.books}/>
                <ListItem toggleList={toggleList} data={data.films}/>
                <ListItem toggleList={toggleList} data={data.travels}/>
                <ListItem toggleList={toggleList} data={data.desires}/>
            </div>
            {modal}

        </div>



    );
}

export default ListPage;