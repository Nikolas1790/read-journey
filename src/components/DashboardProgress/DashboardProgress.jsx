import { ProgressText, ProgressTitle, StarPicture } from './DashboardProgress.styled';
import star from '../../img/star/star.png';
import star2x from '../../img/star/srar@2x.png';

export default function DashboardProgress() {
  return (
    <div>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>Here you will see when and how much you read. To record, click on the red button above.</ProgressText>
      <div>
        <StarPicture>
          <source srcSet={star2x} media="(min-resolution: 192dpi)" />        
          <img src={star} alt="stack books" width={50} />
        </StarPicture> 
      </div>
    </div>
  );
}
  