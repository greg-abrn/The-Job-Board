import Job from "./Job";

const Jobs = (props) => {
  return (
    <main>
      <Job className={props.className} />;
      <Job title={props.title} />;
      <Job contractType={props.contractType} />;
      <Job country={props.country} />;
      <Job city={props.city} />;
    </main>
  );
};

export default Jobs;
