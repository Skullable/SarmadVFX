import './footer.scss'
import linkedin from'../public/linkedin.png'
import facebook from '../public/facebook.png'
import vimeo from '../public/vimeo.png'
import behance from '../public/behance.png'

export default function Footer() {
  return (
    <div className='footer'>
        <h5 className='text'>PORTFOLIO OF SARMAD AMEER</h5>
        <div className="icons">
            <img href='https://www.linkedin.com/in/muhammad-sarmad-64503227b/' className='icon' src={linkedin} alt="" />
            <img className='icon' src={facebook} alt="" />
            <img className='icon' src={vimeo} alt="" />
            <img className='icon' src={behance} alt="" />
        </div>
    </div>
  )
}
