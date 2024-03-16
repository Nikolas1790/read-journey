import { ProgressConteiner, ProgressText, ProgressTitle, Star, StarPicture } from './DashboardProgress.styled';
import star from '../../img/star/star.png';
import star2x from '../../img/star/srar@2x.png';
import mobStar from '../../img/star/mob-star.png';
import mobStar2x from '../../img/star/mob-star@2x.png';

export default function DashboardProgress() {
  return (
    <ProgressConteiner>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>Here you will see when and how much you read. To record, click on the red button above.</ProgressText>
      <div>
        <StarPicture>
          <source srcSet={`${mobStar} 1x, ${mobStar2x} 2x`} media="(max-width: 767px)" />
          <source srcSet={`${star} 1x, ${star2x} 2x`} media="(min-width: 766px)" />    
           
          <Star src={star} alt="stack books" />
        </StarPicture> 
        {/* <StarPicture>
          <source srcSet={star2x} media="(min-resolution: 192dpi)" />        
          <img src={star} alt="stack books" width={50} />
        </StarPicture>  */}
      </div>
    </ProgressConteiner>
  );
}
  