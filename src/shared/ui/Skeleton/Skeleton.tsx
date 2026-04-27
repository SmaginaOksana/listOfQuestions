import "./Skeleton.scss";

function Skeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="emptyBlock"></div>
      ))}
    </>
  );
}

export default Skeleton;
