import Header from './components/Header';
import { Route, Routes } from 'react-router';
import Marketplace from './components/pages/marketplace/Marketplace';
import Token from './components/pages/Token';
import Bridge from './components/pages/Bridge';

export default function App() {

    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Bridge />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/marketplace/:id" element={<Token />} />
                </Routes>
            </main>
        </>
    );
}
