import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Store API_URL in an environment variable or a config file
  const API_URL =
    import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchCustomersWithPayments = async () => {
      try {
        const res = await axios.get(`${API_URL}/customers-with-payments`);
        setCustomers(res.data.customers);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching customers with payments:", err);
        setError("Failed to load customers");
        setLoading(false);
      }
    };

    fetchCustomersWithPayments();
  }, [API_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Dashboard | Internship Task</title>
      </Helmet>
      <h1>All Customers Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, customerIndex) =>
              customer.payments.map((payment, paymentIndex) => (
                <tr key={`${customer._id}-${paymentIndex}`}>
                  {/* Index number */}
                  <th>{customerIndex + 1}</th>
                  {/* Customer name */}
                  <td>{customer.name}</td>
                  {/* Customer email */}
                  <td>{customer.email}</td>
                  {/* Transaction ID */}
                  <td>{payment.transactionId}</td>
                  {/* Payment amount */}
                  <td>{payment.amount}</td>
                  {/* Payment date */}
                  <td>{new Date(payment.paidAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
