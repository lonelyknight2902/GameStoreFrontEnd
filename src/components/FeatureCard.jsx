const FeatureCard = ({featureGame, isActive, onClick}) => {
  return (
    <div onClick={(e) => onClick(e)} className={`flex text-white items-center cursor-pointer gap-4 py-2 px-4 bg-transparent duration-500 ${isActive ? "bg-gray-800" : ""} rounded-lg`}>
      <img src={featureGame.COVERIMAGEURL} alt="Cover game" className="w-16 h-auto rounded-xl"/>
      <span>{featureGame.NAME}</span>
    </div>
  )
}

export default FeatureCard