import portfolio1 from '../public/portfolio1.mp4'
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
     <Section heading1='Video Editing' src1='../public/VFX1.mp4' heading2='Professional' src2='../public/VFX2.mp4' />
     <Section2 heading1='' src1='../public/SLIDESHOW1.mp4' heading2='' src2='../public/SLIDESHOW2.mp4' heading3='' src3='../public/SLIDESHOW3.mp4'/>
     <Section heading1='Video Editing' src1='../public/3D1.mp4' heading2='Professional' src2='../public/3D2.mp4' />
    </div>
  )
}
