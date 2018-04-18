import React, {Component} from 'react';
import Navi from './Navbar';
import '../css/home.css'

class Home extends Component {

    render() {
        return (
            <div>                
                <div className="bg1">
                <Navi/>
                    <div className="ptext">
                        <span className="border trans">
                            NEW YORK CITY
                        </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>PROJECTS</h2>
                    <p>
                       Please Check out my projects!                       
                    </p>
                </section>

                <div className="bg2">
                    <div className="ptext">
                        <span className="border trans">
                            ATLANTA
                        </span>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>SKILLS</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>
                </section>

                <div className="bg3">
                    <div className="ptext">
                        <span className="border trans">
                            SEOUL CITY
                        </span>
                    </div>
                </div>

                <section className="section section-light">
                    <h2>CONTACT</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>
                </section>
                
            </div>
        );
    }
}
export default Home;