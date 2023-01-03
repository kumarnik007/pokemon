import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import React from 'react';
import { Navbar } from './components/Navbar';
import { PokemonList } from './components/PokemonList';
import { NotFoundPage } from './components/NotFoundPage';
import { PokemonSearch } from './components/PokemonSearch';

export const App = () => (
  <div data-cy="app">
    <Navbar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/home"
            element={(
              <Navigate to="/" replace />
            )}
          />

          <Route
            path="/pokemon"
            element={<PokemonList />}
          >
            <Route
              path=":name"
              element={<PokemonList />}
            />
          </Route>

          <Route
            path="/search"
            element={<PokemonSearch />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </main>
  </div>
);
