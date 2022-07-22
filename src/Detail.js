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

  const dataDisplay = (
    <div className="data-item-detail">
      <h1>{detail.name}</h1>
        <div>Trust Score: {detail.trust_score}</div>
        <div>Trust Score Rank: {detail.trust_score_rank}</div>
        <div>Established: {detail.year_established}</div>
      <div>URL: {detail.url}</div>
    </div>
  );

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
