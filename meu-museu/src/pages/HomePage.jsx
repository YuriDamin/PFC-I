// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { consoles } from '../dados/museuDados';

// Imports do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomePage.css';

function HomePage() {
  const consolesOrdenados = [...consoles].sort((a, b) => a.ano - b.ano);

  return (
    <div className="home-container">
      <h2>Selecione uma Era (Linha do Tempo)</h2>
      
      <Swiper
        // (Configurações do Swiper... tudo igual)
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
          1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
        }}
        className="timeline-slider"
      >
        {consolesOrdenados.map((console) => (
          
          <SwiperSlide key={console.id}>
            
            {/* --- 1. INFORMAÇÕES ADICIONADAS AQUI --- */}
            {/* Este div fica DENTRO do SwiperSlide, mas FORA do Link */}
            <div className="slide-info-header">
              <span className="info-geracao">{console.geracao}</span>
              <span className="info-ano">{console.ano}</span>
            </div>
            {/* --- FIM DAS INFORMAÇÕES --- */}

            <Link to={`/console/${console.id}`} className="console-card">
              <img src={console.imagem_url} alt={console.nome} />
              <h3>{console.nome}</h3>
              {/* 2. Removemos o <p className="console-year"> que estava aqui */}
            </Link>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomePage;