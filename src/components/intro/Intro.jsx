import './intro.scss';
import ImageTest from '../../images/dragon_pine2.jpg';
import ImageComponent from '../../components/ImageComponent/ImageComponent.jsx';
// import { createTheme } from '@mui/material/styles';

export default function Intro() {
 
  const numImages = 8
  const imagePaths = []
  for (var i = 0; i < numImages; i++ ) {
    imagePaths.push(`../../images/dragon_pine${i}.jpg`)
  } 
  console.log(imagePaths)

  const elements = ['one', 'two', 'three'];
  return (
    <ImageComponent path="../../images/dragon_pine" ext=".jpg" numImages="8" />
  )
  // return (
  //   <div className="parent" id="intro">
  //     <div className="child">
  //       <img src={ImageTest} height={200} alt="" />
  //     </div>
  //   </div>
  // )
}
