"use client";

import { useState } from "react";
import {
  Box,
  Text,
  TextInput,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "grommet";
import { Search, Checkmark, Close, FormView } from "grommet-icons";
import Layout from "@/app/components/layout/layout";

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      user: "John Doe",
      item: "Chicken ",
      price: 350,
      qty: 2,
      status: "Pending",
      date: "2025-01-21",
    },
    {
      id: "ORD002",
      user: "Meena",
      item: "Gongura ",
      price: 250,
      qty: 1,
      status: "Accepted",
      date: "2025-01-20",
    },
    {
      id: "ORD003",
      user: "Suresh",
      item: "Fish ",
      price: 450,
      qty: 1,
      status: "Rejected",
      date: "2025-01-18",
    },
  ]);

  // Filter Orders by search input
  const filtered = orders.filter(
    (o) =>
      o.user.toLowerCase().includes(search.toLowerCase()) ||
      o.item.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
  );

  // Update Status
  const updateStatus = (orderId: string, status: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  // Get Status Color
  const statusColor = (s: string) => {
    if (s === "Pending") return "status-warning";
    if (s === "Accepted") return "status-ok";
    return "status-critical";
  };

  return (
    <Layout>
      <Box pad="medium" width="100%" gap="medium">
        {/* Title */}
        <Text size="xxlarge" weight="bold">
          User Orders
        </Text>

        {/* Search */}
        <Box width="300px">
          <TextInput
            icon={<Search />}
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        {/* Table */}
        <Box overflow="auto" round="small" border={{ color: "light-4" }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell><Text weight="bold">Order ID</Text></TableCell>
                <TableCell><Text weight="bold">User</Text></TableCell>
                <TableCell><Text weight="bold">Item</Text></TableCell>
                <TableCell><Text weight="bold">Qty</Text></TableCell>
                <TableCell><Text weight="bold">Price</Text></TableCell>
                <TableCell><Text weight="bold">Date</Text></TableCell>
                <TableCell><Text weight="bold">Status</Text></TableCell>
                <TableCell><Text weight="bold">Actions</Text></TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>{order.item}</TableCell>
                  <TableCell>{order.qty}</TableCell>
                  <TableCell>₹{order.price}</TableCell>
                  <TableCell>{order.date}</TableCell>

                  {/* Status Badge */}
                  <TableCell>
                    <Box
                      pad={{ vertical: "xsmall", horizontal: "small" }}
                      background={statusColor(order.status)}
                      round="small"
                    >
                      <Text size="small" color="white">
                        {order.status}
                      </Text>
                    </Box>
                  </TableCell>

                  {/* Action Buttons */}
                  <TableCell>
                    <Box direction="row" gap="small">
                      <Button
                        icon={<Checkmark color="status-ok" />}
                        hoverIndicator
                        onClick={() => updateStatus(order.id, "Accepted")}
                      />
                      <Button
                        icon={<Close color="status-critical" />}
                        hoverIndicator
                        onClick={() => updateStatus(order.id, "Rejected")}
                      />
                      <Button icon={<FormView color="brand" />} hoverIndicator />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Layout>
  );
}
