const ImageCard = ({image, isActive, onClick}) => {
  return (
    <div onClick={(e) => onClick(e)} className={`p-0 h-50 text-white cursor-pointer gap-4 bg-transparent transition-all ease-out border-2 duration-200 rounded-xl ${isActive ?  " border-zinc-100" : "border-transparent"}`}>
      <img src={image} alt="Cover game" className={`rounded-xl h-auto`}/>
    </div>
  )
}

export default ImageCard