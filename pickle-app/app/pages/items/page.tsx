"use client";

import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItems, updateItem,deleteItem } from "@/app/store/slices/itemSlice";

export default function ItemsPage() {
  const dispatch: any = useDispatch();
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const itemsData: any = useSelector(
    (state: any) => state.items?.items || []
  );
  const [form, setForm] = useState<any>({
    name: "",
    price: "",
    type: "",
    description: "",
    img: "",
  });

  useEffect(() => {
    dispatch(getItems());
  }, [])

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
    const {
      name,
      price,
      type,
      description,
      img,
    } = form


    if (editingItem) {
      dispatch(updateItem({ id: editingItem?.id, data: form }));
    } else {
      dispatch(addItem({
        name,
        price,
        type,
        description,
        img,
      }));
    }

    setOpen(false);
  };

  // Delete item
  const deleteItems = (id: string) => {
    dispatch(deleteItem(id));
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
          {itemsData?.map((item: any) => (
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
                  onClick={() => deleteItems(item.id)}
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
