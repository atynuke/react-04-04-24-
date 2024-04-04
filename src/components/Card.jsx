import "./card.css";

const Cards = (props) => {
  return (
    <>
      <div className="card-wrap">
        <img src={props.image} alt="image from backend" />

        <div>
          <h1 className="card-name">name:{props.name}</h1>
          <p className="card-email">email:{props.email}</p>
          <p className="card-gender">gender:{props.gender}</p>
        </div>
      </div>
    </>
  );
};
export default Cards;