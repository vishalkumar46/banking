import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import HeaderBox from "@/components/ui/header";
import React from "react";
import RightSideBar from "@/components/ui/RightSIdeBar";

const Home = () => {
  const loggedIN = {
    firstName: "Vishal",
    lastName: "kumar",
    email: "vkrmech77@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIN?.firstName}
            subtext="Access and Manage your Account"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={100}
          />
        </header>
      </div>
      <RightSideBar
        user={loggedIN}
        banks={[{ currentBalance: 1221.5 }, { currentBalance: 11213.01 }]}
        transactions={[]}
      />
    </section>
  );
};

export default Home;
