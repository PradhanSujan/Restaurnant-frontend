
export default function FoodItem(props) {
    return(
      <>
          <div className="food-item">
              <img src="" alt="img"/>
                <h4>{props.title}</h4>
                <p>{props.para}</p>
              </div>
      </>
    )
  }