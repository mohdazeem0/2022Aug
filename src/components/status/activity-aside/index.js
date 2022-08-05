import FilterByDate from "./FilterByDate";
import TimeLine from "./TimeLine";
import "./aside.scss";

export default function ActivityAside() {
  return (
    <div class="slds-box">
      <FilterByDate />
      <TimeLine />
    </div>
  );
}
