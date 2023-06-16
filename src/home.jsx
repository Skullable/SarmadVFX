import portfolio1 from '../public/portfolio1.mp4'
import VFX1 from '../public/VFX1.mp4'
import VFX2 from '../public/VFX2.mp4'
import SLIDESHOW1 from '../public/SLIDESHOW1.mp4'
import SLIDESHOW2 from '../public/SLIDESHOW2.mp4'
import SLIDESHOW3 from '../public/SLIDESHOW3.mp4'
import D1 from '../public/D1.mp4'
import D2 from '../public/D2.mp4'
import './home.scss'


function Videobox(props){
    return(
        <div className="videobox">
            <h3 className='heading'>{props.heading}</h3>
            <video className='vid' src={props.src} autoPlay loop muted></video>
        </div>
    )
}


function Section(props){
    return(
        <div className="section">
            <Videobox heading={props.heading1} src={props.src1}/>
            <Videobox heading={props.heading2} src={props.src2}/>
        </div>
    )
}
function Section2(props){
    return(
        <div className="section">
            <Videobox heading={props.heading1} src={props.src1}/>
            <Videobox heading={props.heading2} src={props.src2}/>
            <Videobox heading={props.heading3} src={props.src3}/>
        </div>
    )
}


export default function Home() {
  return (
    <div className='home'>
     <video className='vid' src={portfolio1} autoPlay loop muted ></video>
     <Section heading1='I can create your brand Logo animations with cool and professional effects'/>
     <Section heading1='Video Editing' src1={VFX1} heading2='Professional' src2={VFX2} />
     <Section2 heading1='' src1={SLIDESHOW1} heading2='' src2={SLIDESHOW2} heading3='' src3={SLIDESHOW3}/>
     <Section heading1='Video Editing' src1={D1} heading2='Professional' src2={D2} />
    </div>
  )
}
