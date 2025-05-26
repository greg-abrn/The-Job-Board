const Job = (props) => {
  return (
    (<h2>{props.className}</h2>),
    (<h2>{props.title}</h2>),
    (<h3>{props.contractType}</h3>),
    (<h3>{props.country}</h3>),
    (<h3>{props.city}</h3>)
  );
};

export default Job;
