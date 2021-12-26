import styles from "./chart.module.css";
import ChartBar from "../ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...values);

  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
