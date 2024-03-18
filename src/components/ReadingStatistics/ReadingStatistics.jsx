import { CircleStyle, GreenBlock, PagePercentBlock, PagesRead, PercentTitle, StatBlock, StatPercentBlock, StatText, TextOneHundredPercent } from './ReadingStatistics.styled';
import { useSelector } from 'react-redux';
import { selectInfoCurrentBook } from '../../redux/books/selector';

export default function ReadingStatistics({totalReadPages}) {
  const InfoAboutBook =useSelector(selectInfoCurrentBook);

  const roundToTwoDecimalPlaces = () => {
    const percentage = Math.min((Math.round(totalReadPages * 100) / InfoAboutBook.totalPages).toFixed(2), 100);
    return percentage;
  };
  
  return (  
    <>
      <StatText>Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history.</StatText>
      <StatBlock>
        <StatPercentBlock>
          <CircleStyle percent={roundToTwoDecimalPlaces() || 0} strokeWidth={9} strokeColor={'#30B94D'} trailWidth={9} trailColor={"#1F1F1F"} />
          <TextOneHundredPercent>100 %</TextOneHundredPercent>
        </StatPercentBlock>
        <PagePercentBlock>
        <GreenBlock />
        <div>
          <PercentTitle>{roundToTwoDecimalPlaces() || 0} %</PercentTitle>
          <PagesRead>{totalReadPages} pages read</PagesRead>
        </div>
        </PagePercentBlock>
      </StatBlock>
    </> 
  );
}  