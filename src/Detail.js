import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {detailAction} from "./actions/detailAction";
import {useDispatch, useSelector} from "react-redux";

function Detail(props) {
  const {loading, history, id} = props;

  const {data} = useSelector((state) => {
    console.log('received', state);
    return state.data;
  }) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      try {
        await dispatch(detailAction(id));
      } catch (err ){
        console.warn(err);
      }
    };

    get();

  }, [dispatch]);

  const dataDisplay = data.map((data) => {
    return (
      <div className="data-item-detail">
        {data.id}
      </div>
    );
  });

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          {dataDisplay}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
