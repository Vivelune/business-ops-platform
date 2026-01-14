import React from 'react'
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

const getData = async (): Promise<Payment[]> => {
  // Simulate an async operation (e.g., API cal
  
  return [
    {
      id: "1",
      amount: 250.00,
      status: "success",
      username: "john.doe",
      email: "john.doe@example.com",
    },
    {
      id: "2",
      amount: 150.50,
      status: "pending",
      username: "jane.smith",
      email: "jane.smith@example.com",
    },
    {
      id: "3",
      amount: 75.25,
      status: "failed",
      username: "alex.jones",
      email: "alex.jones@example.com",
    },
    {
      id: "4",
      amount: 500.00,
      status: "success",
      username: "emily.davis",
      email: "emily.davis@example.com",
    },
    {
      id: "5",
      amount: 320.75,
      status: "processing",
      username: "mike.wilson",
      email: "mike.wilson@example.com",
    },
  ];
};


const PaymentPage = async () => {

    const data = await getData()

  return (
    <div>
      <div className='mb-8 px-4 py-2 bg-secondary rounded-md'>
            <h1 className='font-semibold'>All Payments</h1>
      </div>
       <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentPage
