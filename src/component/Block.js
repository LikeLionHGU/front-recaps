import WeekList from "./Weeklist";

export default function Block({ id, week, recap }) {
  const title = "제목";
  const owner_name = "글쓴이";
  const date = "24-01-30";

  return (
    <div className="list">
      <WeekList week={week} title={title} owner_name={owner_name} date={date} />
    </div>
  );
}
