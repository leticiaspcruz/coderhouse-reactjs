import React from "react";
import { NavBar, ItemsListContainer, Banner } from '../components';

const Home = () => {
  return (
    <>
     <NavBar />
     <Banner />
     <ItemsListContainer title={'nossos destaques'}/>
    </>
  );
};

export default Home;