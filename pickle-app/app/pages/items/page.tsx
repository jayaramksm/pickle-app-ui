"use client";

import { useState } from "react";
import {
  Box,
  Text,
  Button,
  Layer,
  TextInput,
  TextArea,
  Select,
  FileInput,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "grommet";
import { Add, Edit, Trash } from "grommet-icons";
import Layout from "@/app/components/layout/layout";

export default function ItemsPage() {
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [items, setItems] = useState<any[]>([
    {
      id: 1,
      name: "Chicken Pickle",
      price: 350,
      type: "Non-Veg",
      description: "Spicy Andhra style chicken pickle",
      img:
        "data:image/jpeg;base64,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",
    },
  ]);

  const [form, setForm] = useState<any>({
    name: "",
    price: "",
    type: "",
    description: "",
    img: "",
  });

  // Open modal for Add or Edit
  const openModal = (item: any = null) => {
    setEditingItem(item);

    if (item) {
      setForm(item);
    } else {
      setForm({
        name: "",
        price: "",
        type: "",
        description: "",
        img: "",
      });
    }

    setOpen(true);
  };

  // Save new / updated item
  const saveItem = () => {
    if (editingItem) {
      setItems((prev) =>
        prev.map((i) => (i.id === editingItem.id ? form : i))
      );
    } else {
      setItems((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    setOpen(false);
  };

  // Delete item
  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <Layout>
      <Box pad="medium" gap="medium">
        {/* Page Header */}
        <Box direction="row" justify="between" align="center">
          <Text size="xxlarge" weight="bold">
            Manage Items
          </Text>

          <Button
            icon={<Add />}
            label="Add Item"
            primary
            color="brand"
            onClick={() => openModal()}
          />
        </Box>

        {/* Items Grid */}
        <Box direction="row" wrap gap="medium">
          {items.map((item) => (
            <Card key={item.id} width="300px" background="light-1" height="auto">
              <CardBody height="100px">
                <Image
                  src={item.img}
                  fit="contain"
                  alt="Pickle"
                />
              </CardBody>

              <Box pad="medium" gap="small">
                <Text weight="bold" size="large">
                  {item.name}
                </Text>
                <Text size="small" color="dark-5">
                  {item.type}
                </Text>
                <Text>₹{item.price}</Text>
                <Text size="small">{item.description}</Text>
              </Box>

              <CardFooter pad="small" direction="row" justify="between">
                <Button
                  icon={<Edit color="brand" />}
                  hoverIndicator
                  onClick={() => openModal(item)}
                />
                <Button
                  icon={<Trash color="status-critical" />}
                  hoverIndicator
                  onClick={() => deleteItem(item.id)}
                />
              </CardFooter>
            </Card>
          ))}
        </Box>

        {/* Add / Edit Modal */}
        {open && (
          <Layer
            onEsc={() => setOpen(false)}
            onClickOutside={() => setOpen(false)}
            modal
            responsive
            position="center"
          >
            <Box pad="large" gap="medium" width="400px">
              <Text size="xlarge" weight="bold">
                {editingItem ? "Edit Item" : "Add New Item"}
              </Text>

              <TextInput
                placeholder="Pickle Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <TextInput
                placeholder="Price"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <Select
                options={["Veg", "Non-Veg"]}
                value={form.type}
                placeholder="Select Type"
                onChange={({ option }) =>
                  setForm({ ...form, type: option })
                }
              />

              <TextArea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <TextInput
                placeholder="Image URL"
                value={form.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
              />

              <Box direction="row" justify="between" margin={{ top: "medium" }}>
                <Button
                  label="Cancel"
                  onClick={() => setOpen(false)}
                />

                <Button
                  primary
                  color="brand"
                  label={editingItem ? "Update" : "Add"}
                  onClick={saveItem}
                />
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    </Layout>
  );
}
