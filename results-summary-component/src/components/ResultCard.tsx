import ResultCircle from './ResultCircle'
import ResultText from './ResultText'

const ResultCard = () => {
  return (
    <div className="resultCard">
      <p className="resultHeader">Your Result</p>
      <ResultCircle />
      <ResultText />
    </div>
  )
}

export default ResultCard
