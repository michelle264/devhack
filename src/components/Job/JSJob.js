import React from 'react';
import './JSJob.css';
import Img1 from './Img1.png';
import Img2 from './Img2.png';
import Img3 from './Img3.png';


class JSJob extends React.Component{
    render(){
        return(
        <div className='container'>
            <div className='searchbar'>
                <div className='keywordBar'>
                    <div className='section'>Keywords/job title</div>
                    <div className='section'>Location</div>
                    <div className='section'>Distance</div>
                    <div className='section'>Find Jobs</div>
                </div>
                <div className='filter'>Advanced filters</div>
            </div>

            <div className='job'>
                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='location'>Micron Technology | Muar, Johore, Malaysia</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <button className='check-button'>CHECK</button>
                    </div>
                    <div className='card-right'>
                        <img src={Img1} alt='Img 1'></img>
                    </div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='location'>Micron Technology | Muar, Johore, Malaysia</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <button className='check-button'>CHECK</button>
                    </div>
                    <div className='card-right'>
                        <img src={Img2} alt='Img 2'></img>
                    </div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='location'>Micron Technology | Muar, Johore, Malaysia</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <button className='check-button'>CHECK</button>
                    </div>
                    <div className='card-right'>
                        <img src={Img3} alt='Img 3'></img>
                    </div>
                </div>

            </div>

           

        </div>

        
        )
        
    }
}

export default JSJob;