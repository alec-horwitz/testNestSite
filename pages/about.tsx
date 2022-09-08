import Link from 'next/link';
import { TallContainer, Main, Title, Description } from '../components/sharedstyles';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../slices/testSlice';
import react, {useState, useEffect} from 'react';

export default function About() {
  const count = useSelector((state: RootState) => state.test.value);
  const dispatch = useDispatch();
  const [scrollPos, setScrollPos] = useState(0);
  const [countInputVal, setCountInputVal] = useState(0);
  
  const itsBelow = "It's Below 9000."
  const itsAbove = "It's Above 9000."
  const itsExactly = "It's Exactly 9000."
  const [countCommentary, setCountCommentary] = useState(itsBelow);
  
  const handleScroll = () => {
    setScrollPos(scrollY)
  }
  
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.addEventListener('scroll', handleScroll);
    };
  });
  
  useEffect(()=>{
    if (count > 9000) {
      setCountCommentary(itsAbove)
    } else if (count < 9000) {
      setCountCommentary(itsBelow)
    } else {
      setCountCommentary(itsExactly)
    }
  }, [count]);
  
  
  return (
    <TallContainer>
      <Main>
        <Title>About Page</Title>
        <Description>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </Description>
      <input
        aria-label="Increment by 5"
        onChange={(e) => {
          const numericInputValue = Number(e.target.value);
          const sanitizedNumericInputValue = isNaN(numericInputValue) ? 0 : numericInputValue;
          console.log("Hello World! sanitizedNumericInputValue:", sanitizedNumericInputValue);
          setCountInputVal(sanitizedNumericInputValue);
        }}
      />
      <button
        aria-label="Increment by 5"
        onClick={() => dispatch(incrementByAmount(countInputVal))}
      >
        Increment by user defined amount
      </button>
      <span>count: {count}</span>
      <span>{countCommentary}</span>
      
      <span style={{marginTop:"40rem"}}>Scroll Position: {scrollPos}</span>
      </Main>
    </TallContainer>
  );
};
