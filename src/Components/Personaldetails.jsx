import React from "react";
function PersonalDetailsHeading() {
  return <h4>Below are the personal details</h4>;
}
function PersonalDetails(props) {
  return (
    <div className={props.class}>
      <p className="name">Name:{props.name}</p>
      <p className="age">Age:{props.age}</p>
      <p className="sex">Sex:{props.sex}</p>
    </div>
  );
}
export default PersonalDetails;
export { PersonalDetailsHeading };
