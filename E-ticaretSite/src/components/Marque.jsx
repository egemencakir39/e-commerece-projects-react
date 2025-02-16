import React from 'react';
import Marquee from 'react-fast-marquee';
import '../css/marque.css'

function Marque() {
    return (
        <div>
            <Marquee gradient={false} speed={100} className='marq'>
                <span className="marquee-item">Peşin Fiyatına 9 Taksit!</span>
                <span className="marquee-item">•</span>
                <span className="marquee-item">Ayakkabı</span>
                <span className="marquee-item">•</span>
                <span className="marquee-item">Çanta</span>
                <span className="marquee-item">•</span>
                <span className="marquee-item">Aksesuar</span>
                <span className="marquee-item">•</span>
                <span className="marquee-item">İndirim Fırsatları</span>
            </Marquee>
        </div>
    )
}

export default Marque