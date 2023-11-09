import React from 'react';
import './HRJob.css';
import { Link } from 'react-router-dom';

class HRJob extends React.Component{
    render(){
        return(
        <div className='container'>
            <div className='searchbar'>
                <div className='section'>Keywords/job title</div>
                <div className='filter'>Advanced filters</div>
            </div>

            <div className='job'>
                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

                <div className='box'>
                    <div className='card-left'>
                        <div className='card-title'>Principal Engineer Data Scientist</div>
                        <div className='card-details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.</div> 
                        <Link to="/Resume">
                        <button className='check-button'>CHECK</button>
                        </Link>
                    </div>
                    <div className='card-right'>department of computers and information technology</div>
                </div>

            </div>

           

        </div>

        
        )
        
    }
}

export default HRJob;