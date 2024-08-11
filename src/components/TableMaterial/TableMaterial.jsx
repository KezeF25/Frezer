import React from "react";
import styles from './tableMaterialStyle.module.scss'

const TableMaterial = () => {
  return (
    <div className={styles.tableMaterial}>
      <div className={styles.title}>Обрабатываемые Материалы</div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.color_one}>
            <th></th>
            <th>ПЭТ</th>
            <th>Композит</th>
            <th>Оргстекло, Акрил, Полистирол</th>
            <th>ПВХ</th>
            <th>ДСП, МДФ</th>
            <th>Фанера</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.color_two}>
            <th>1 - 8 мм</th>
            <td>20 р.</td>
            <td>30 р.</td>
            <td>40 р.</td>
            <td>20 р.</td>
            <td>15 р.</td>
            <td>30 р.</td>
          </tr>
          <tr className={styles.color_three}>
            <th>9 - 16 мм</th>
            <td>20 р.</td>
            <td>30 р.</td>
            <td>40 р.</td>
            <td>20 р.</td>
            <td>15 р.</td>
            <td>30 р.</td>
          </tr>
          <tr className={styles.color_two}>
            <th>17 - 32 мм</th>
            <td>20 р.</td>
            <td>30 р.</td>
            <td>40 р.</td>
            <td>20 р.</td>
            <td>15 р.</td>
            <td>30 р.</td>
          </tr>
          <tr className={styles.color_three}>
            <th>32 - 40 мм</th>
            <td>20 р.</td>
            <td>30 р.</td>
            <td>40 р.</td>
            <td>20 р.</td>
            <td>15 р.</td>
            <td>30 р.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableMaterial;
