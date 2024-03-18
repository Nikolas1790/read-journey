import { LinkTitlelTo, LinkTo, LinkToSvg } from "components/Dashboard/Dashboard.styled";
import { Arguments, ArgumentsBlock, SeriaNumber, StartWorkoutBlock, StartWorkoutTitle, TextOne, TextSpan, TextTwo } from "./StartWorkout.styled";
import sprite from '../../img/sprite.svg';

export default function StartWorkout() {
  return (
    <StartWorkoutBlock>
      <StartWorkoutTitle>Start your workout</StartWorkoutTitle>
      <ArgumentsBlock>
      <Arguments>
        <SeriaNumber>1</SeriaNumber>
        <TextOne>Create a personal library: <TextSpan>add the books you intend to read to it.</TextSpan></TextOne>
      </Arguments>
      <Arguments>
        <SeriaNumber>2</SeriaNumber>
        <TextTwo>Create your first workout: <TextSpan>define a goal, choose a period, start training.</TextSpan></TextTwo>
      </Arguments>
      </ArgumentsBlock>
      <LinkTo to="/library">
        <LinkTitlelTo>My library </LinkTitlelTo>            
        <LinkToSvg>
          <use href={`${sprite}#icon-arrow-right`} />
        </LinkToSvg>          
      </LinkTo>
    </StartWorkoutBlock>
  );
}  