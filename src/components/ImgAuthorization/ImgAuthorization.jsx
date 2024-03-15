import desctopImg from '../../img/fon/desctop-block.jpg';
import desctopImg2x from '../../img/fon/desctop-block@2x.jpg';
import mobileImg from '../../img/fon/mob-block.jpg';
import mobileImg2x from '../../img/fon/mob-block@2x.jpg';
import { Img } from './ImgAuthorization.styled';

export default function ImgAutorization() {
  return (    
      <picture>
        <source srcSet={`${mobileImg} 1x, ${mobileImg2x} 2x`} media="(max-width: 767px)" />
        <source srcSet={`${desctopImg} 1x, ${desctopImg2x} 2x`} media="(min-width: 1440px)" />
        {/* <source srcSet={desctopImg2x} media="(min-resolution: 192dpi)" /> */}
        <Img src={desctopImg} alt="register img" />
      </picture>  
  );
}
