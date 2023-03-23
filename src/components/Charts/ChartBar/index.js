import styles from "./chartbar.module.css";

const ChartBar = props => {
  let barChartHeight = "0%";

  if (props.maxValue > 0) {
    barChartHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    console.log(barChartHeight);
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBar_inner}>
        <div className={styles.chartBar_inner_fill} style={{ height: barChartHeight }}></div>
      </div>
      <div className={styles.chartBar_label}>
        {props.label} {barChartHeight}
      </div>
    </div>
  );
};

export default ChartBar;
