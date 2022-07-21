import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {dataAction} from "actions/dataAction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {NavLink} from "react-router-dom";


function App() {
  const {data} = useSelector((state) => {
    console.log('received', state);
    return state.data;
  }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
        try {
          await dispatch(dataAction());
        } catch (err ){
          console.warn(err);
        }
    };

    get();

  }, [dispatch]);

  const dataDisplay = data.map((item) => {
    const {id = 'id default', name = 'name default'} = item;
    const url = `/detail/${id}`;
    return (
      <NavLink to={url}>
          <div className="data-item" key={`data_${id}}`}>
            <span><p>{id}</p></span>
            <span><p>{name}</p></span>
          </div>
      </NavLink>
    );
  });

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <h1>Found items:</h1>
          <div className="data-items">
            {dataDisplay}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
