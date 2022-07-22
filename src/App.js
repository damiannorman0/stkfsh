import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {dataAction} from "./actions/dataAction";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {NavLink} from "react-router-dom";


function App() {
  const {data} = useSelector((state) => {
    return state.data;
  }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(dataAction());

  }, [dispatch]);

  const dataDisplay = data.map((item) => {
    const {id, name} = item;
    const url = `/detail/${id}`;
    return (
      <NavLink to={url} key={`data_${id}}`}>
          <div className="data-item" >
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
