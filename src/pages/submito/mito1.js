import React, { Component } from 'react';
import cartelaMito1 from '../../assets/cartela_mito_1.png';

import './styles.css';

class Mito1 extends Component {

    render() {
        return (
            <section className="section-mito1">
                <div className="box-mitos-banner">
                    <img src={cartelaMito1} alt="logo" />
                </div>
            </section>
        );

    }

}

export default Mito1