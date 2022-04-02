import "./home.page.css";

import * as components from '../../components/index';

const HomePage = () =>{

    return (
        <>
        <div className="homepage-container">
            <div className="roulette-table">
                <components.RouletteWheel/>
                <components.ButtonTable/>
            </div>
        </div>
        </>
    )
}

export default HomePage;