export const Card = (props) => {

    return (
        <>
          {/* {db.map((e) => {
            return ( */}
          <div className="card" style={{ backgroundColor: props.color }}>
            <div className="card-image">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/3f81302ba956403b82bcc5d7366c74c9_292x292.jpeg"
                alt=""
              />
            </div>
            <div className="card-text">
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut
              </span>
            </div>
          </div>
          {/* );
          })} */}
        </>
      );
    };
    