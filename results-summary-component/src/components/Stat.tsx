import dataValues from '../types/dataValues'

const Stat = (data: dataValues) => {
  return (
    <div
      className="statContainer"
      style={{ backgroundColor: data.bgColor }}
    >
      <div className="iconAndCategory">
        <img
          src={data.icon}
          alt={data.category + ' icon'}
          className="statIcon"
        />
        <p className="statCategory" style={{ color: data.color }}>
          {data.category}
        </p>
      </div>
      <p className="statScore">
        <span
          style={{ fontFamily: 'HankenGroteskBold', color: 'black' }}
        >
          {data.score}
        </span>
        {' / 100'}
      </p>
    </div>
  )
}

export default Stat
