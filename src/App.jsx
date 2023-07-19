import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import CountryDetailLayout from './components/CountryDetailLayout';
import Home from './pages/home'
import CountryDetail from './pages/countryDetail'
import { SkeletonTheme } from 'react-loading-skeleton';


function App() {
  return (
    <SkeletonTheme
      baseColor="rgba(235,235,235,0.7)"
      highlightColor="rgba(235,235,235,0.5)">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:name" element={<CountryDetailLayout />}>
              <Route index element={<CountryDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>
  )
}

export default App
