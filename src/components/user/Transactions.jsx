import React from "react";
import data from "../../assets/transactionData";

const Transactions = () => {
  return (
    <div className="border border-whitr rounded-lg p-10">
      <table className="w-full text-xs">
        <thead>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>Type</th>
          <th>Name</th>
          <th>Value</th>
          <th>Return</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody className="">
          {data &&
            data.map((item) => (
              <tr className="border">
                <td className="text-center">{item.date}</td>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.type}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.value}</td>
                <td className="text-center">{item.return}</td>
                <td className="text-center">{item.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
