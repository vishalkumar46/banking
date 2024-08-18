import React from "react";
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";
import BankCard from "./BankCard";

const RightSideBar = ({ user, banks, transactions }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner">
          <div className="profile">
            <div className="profile-img">
              <span className="font-bold text-5xl text-blue-500">
                {user.firstName[0]}
              </span>
            </div>
            <div className="profile-details">
              <h1 className="font-bold">
                {user.firstName} {user.lastName}
              </h1>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image
              src="/icons/plus.svg"
              alt="add bank"
              width={20}
              height={20}
            />
            <h2 className="text-14 font-semibold">Add bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <div className="relative flex flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BankCard
                key={banks[0].$id}
                showBalance={false}
                userName={`${user.firstName}${user.lastName}`}
                account={[banks[0]]}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  showBalance={false}
                  userName={`${user.firstName} ${user.lastName}`}
                  account={[banks[1]]}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSideBar;
