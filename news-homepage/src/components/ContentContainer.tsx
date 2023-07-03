import BigImage from './contentComponents/BigImage'
import BottomNewsContainer from './contentComponents/BottomNewsContainer'
import HeaderTextContainer from './contentComponents/HeaderTextContainer'
import NewsPanelContainer from './contentComponents/NewsPanelContainer'
import SmallTextContainer from './contentComponents/SmallTextContainer'

const ContentContainer = () => {
  return (
    <div className="contentContainer">
      <BigImage />
      <HeaderTextContainer />
      <SmallTextContainer />
      <NewsPanelContainer />
      <BottomNewsContainer />
    </div>
  )
}

export default ContentContainer
