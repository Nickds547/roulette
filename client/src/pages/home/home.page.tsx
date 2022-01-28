import "./home.page.css";

import * as components from '../../components/index';

const HomePage = () =>{

    return (
        <>
        <div className="hompage-container">
            <components.RouletteWheel/>
            <components.ButtonTable/>
        </div>
        </>
    )
}

export default HomePage;