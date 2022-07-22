import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {detailAction} from "./actions/detailAction";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function Detail(props) {
  const {id} = useParams();
  const {detail} = useSelector((state) => {
    return state.data;
  }) || {};

  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(detailAction(id));
  }, [dispatch, id]);

  const dataDisplay = (<div className="data-item-detail">
    {detail.url}
  </div>);

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
