import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle='Quarentena no ifpi'
        url='https://www.youtube.com/watch?v=kHKI2Tjs93Q'
        videoDescription={"Fique em casa: Aproveite a quarentena e aprenda como criar um omelete crocante !"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      
   
      <Carousel  
        category={dadosIniciais.categorias[0]}
      />      

      <Footer />
    </div>
  );
}

export default App;