import React from "react";
import { formatAmount } from "../../../lib/utils";
import AnimationCount from "./AnimationCount";
import DoughnutChart from "./Doughnut";
import Doughnut from "./Doughnut";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart
          accounts={[
            { name: "bank1", currentBalance: 100 },
            { name: "bank2", currentBalance: 200 },
            { name: "bank3", currentBalance: 300 },
          ]}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2"> Banks Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            <AnimationCount amount={totalCurrentBalance} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
