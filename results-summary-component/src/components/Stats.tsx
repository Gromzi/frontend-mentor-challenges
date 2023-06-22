import Stat from './Stat'
import data from '../data/data.json'

console.log(data)

const Stats = () => {
  return (
    <div className="statsContainer">
      {data.map((stat) => (
        <Stat
          key={stat.category}
          category={stat.category}
          score={stat.score}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  )
}

export default Stats
