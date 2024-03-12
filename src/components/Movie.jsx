import props from 'prop-types';


function Movie(props){
    const {
        Title: title,
        Year: year,
        Type: type,
        imdbID: id,
        Poster: poster
    }= props;

    return  <div id={id} className="row movie">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image"  > 
        {
          poster === 'N/A' ?  <img src= {`https://placehold.co/300x470?text=${title}`} />
          : <img src={poster} />
        }
          
        </div>
        <div>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{year}<span name="right">{type}</span></p>
        </div>
      </div>
    </div>
  </div>
}
export{Movie}