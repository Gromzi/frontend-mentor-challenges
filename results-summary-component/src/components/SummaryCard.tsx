import ContinueButton from './ContinueButton'
import Stats from './Stats'

const SummaryCard = () => {
  return (
    <div className="summaryCard">
      <p className="summaryCardHeader">Summary</p>
      <Stats />
      <ContinueButton />
    </div>
  )
}

export default SummaryCard
