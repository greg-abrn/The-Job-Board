const Job = (props) => {
  return (
    <div className={`job ${props.className}`}>
      <span>{props.title}</span>
      <div>
        <span>
          {props.contractType} - {props.country} - {props.city}
        </span>
      </div>
    </div>
  );
};

export default Job;
