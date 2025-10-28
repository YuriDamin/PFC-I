import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { consoles } from '../dados/museuDados';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './HomePage.css';

function HomePage() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState('todas');
  const [selectedGeracao, setSelectedGeracao] = useState('todas');
  const [searchTerm, setSearchTerm] = useState('');

  const empresas = [...new Set(consoles.map((c) => c.fabricante))];
  const geracoes = [...new Set(consoles.map((c) => c.geracao))];

  function getBrandClass(fabricante) {
    const brand = fabricante.toLowerCase();
    if (brand.includes('nintendo')) return 'brand-nintendo';
    if (brand.includes('sega')) return 'brand-sega';
    if (brand.includes('sony')) return 'brand-sony';
    return 'brand-default';
  }

  function getGenerationClass(geracao) {
    const num = geracao.match(/\d+/);
    if (!num) return 'gen-default';
    return `gen-${num[0]}`;
  }

  const consolesFiltrados = useMemo(() => {
    return consoles
      .filter((c) => {
        const empresaOk = selectedEmpresa === 'todas' || c.fabricante === selectedEmpresa;
        const geracaoOk = selectedGeracao === 'todas' || c.geracao === selectedGeracao;
        return empresaOk && geracaoOk;
      })
      .sort((a, b) => a.ano - b.ano);
  }, [selectedEmpresa, selectedGeracao]);

  const jogosEncontrados = useMemo(() => {
    if (searchTerm.trim() === '') return [];
    const termo = searchTerm.toLowerCase();
    return consoles
      .flatMap((c) =>
        c.jogos
          .filter((j) => j.titulo.toLowerCase().includes(termo))
          .map((j) => ({
            ...j,
            consoleNome: c.nome,
            consoleId: c.id,
            anoConsole: c.ano,
          }))
      )
      .sort((a, b) => a.ano - b.ano);
  }, [searchTerm]);

  return (
    <div className="home-container">
      {/* --- BARRA FIXA NO TOPO --- */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Pesquise um jogo (ex: Mario, Sonic, GTA...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <h2>🎮 Museu Digital RetroGames</h2>
      <p className="subtitle">Explore consoles ou busque diretamente por um jogo!</p>

      {/* --- RESULTADOS DE PESQUISA --- */}
      {searchTerm && (
        <div className="search-results glass">
          <h3>Resultados da pesquisa ({jogosEncontrados.length})</h3>
          {jogosEncontrados.length === 0 ? (
            <p className="no-results">Nenhum jogo encontrado.</p>
          ) : (
            <ul className="search-list">
              {jogosEncontrados.map((j) => (
                <li key={j.id}>
                  <Link to={`/console/${j.consoleId}/${j.id}`}>
                    <strong>{j.titulo}</strong> — <span>{j.consoleNome}</span> ({j.ano})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* --- FILTROS E SWIPER DE CONSOLES (SÓ MOSTRA SE NÃO ESTIVER PESQUISANDO) --- */}
      {!searchTerm && (
        <>
          <button
            className={`toggle-filters-btn ${showFilters ? 'open' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            🕹️ Filtrar consoles
            <span className="arrow-icon" />
          </button>

          <div className={`filter-wrapper ${showFilters ? 'open' : ''}`}>
            <div className="filters-row">
              {/* EMPRESA */}
              <div className="filter-group">
                <label>Empresa</label>
                <div className="filter-buttons">
                  <button
                    className={`filter-btn ${selectedEmpresa === 'todas' ? 'active' : ''}`}
                    onClick={() => setSelectedEmpresa('todas')}
                  >
                    Todas
                  </button>
                  {empresas.map((emp) => (
                    <button
                      key={emp}
                      data-brand={emp}
                      className={`filter-btn ${selectedEmpresa === emp ? 'active' : ''}`}
                      onClick={() => setSelectedEmpresa(emp)}
                    >
                      {emp}
                    </button>
                  ))}
                </div>
              </div>

              {/* GERAÇÃO */}
              <div className="filter-group">
                <label>Geração</label>
                <div className="filter-buttons">
                  <button
                    className={`filter-btn ${selectedGeracao === 'todas' ? 'active' : ''}`}
                    onClick={() => setSelectedGeracao('todas')}
                  >
                    Todas
                  </button>
                  {geracoes.map((g) => (
                    <button
                      key={g}
                      data-gen={g}
                      className={`filter-btn ${selectedGeracao === g ? 'active' : ''}`}
                      onClick={() => setSelectedGeracao(g)}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Swiper
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
            {consolesFiltrados.map((console) => (
              <SwiperSlide key={console.id}>
                <div className="slide-info-header">
                  <span className="info-geracao">{console.geracao}</span>
                  <span className="info-ano">{console.ano}</span>
                </div>

                <Link
                  to={`/console/${console.id}`}
                  className={`console-card ${getBrandClass(console.fabricante)} ${getGenerationClass(console.geracao)}`}
                >
                  <img src={console.imagem_url} alt={console.nome} />
                  <h3>{console.nome}</h3>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}

export default HomePage;
