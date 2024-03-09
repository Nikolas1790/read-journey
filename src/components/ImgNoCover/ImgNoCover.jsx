
import desctopImg from '../../img/fon/desctop-block.jpg';
import desctopImg2x from '../../img/fon/desctop-block@2x.jpg';

export default function ImgNoCover() {
  return (    
      <picture>
        <source srcSet={desctopImg2x} media="(min-resolution: 192dpi)" />
        <img src={desctopImg} alt="register img" />
      </picture>  
  );
}
