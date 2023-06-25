import '../index.css';
function Content(props){
  return <div>
    <ul id="concepts_1">
    <li className="concept">
          <img src={props.any_name_app[0].image} alt={props.any_name_app[0].image} />
          <h2>{props.any_name_app[0].title}</h2>
          <p>{props.any_name_app[0].description}</p>
        </li>
        <li className="concept">
          <img src={props.any_name_app[1].image} alt={props.any_name_app[1].image} />
          <h2>{props.any_name_app[1].title}</h2>
          <p>{props.any_name_app[1].description}</p>
        </li>
        <li className="concept">
          <img src={props.any_name_app[2].image} alt={props.any_name_app[2].image} />
          <h2>{props.any_name_app[2].title}</h2>
          <p>{props.any_name_app[2].description}</p>
        </li>
        </ul>
      
        
  </div>
}
export default Content;