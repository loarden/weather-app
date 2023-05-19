function Detail(props) {
  const detailsName = props.detailsName;
  const detail = props.detail;

  return (
    <div className="flex justify-between text-md sm:text-xl gap-5">
      <span className="drop-shadow-sm">{detailsName}</span>
      <span className="font-bold drop-shadow-sm">{detail}</span>
    </div>
  )
}

export default Detail;