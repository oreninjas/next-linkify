"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { FormEvent, useState } from "react";
import { SelectValue } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  linkifyId: string;
  onClose?: () => void;
  categoryId?: string;
}

const AddComponent = ({ linkifyId, onClose, categoryId }: Props) => {
  const [type, setType] = useState<"link" | "category">("link");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = axios.post(
        `/api/linkify/${
          type === "link"
            ? `categories/link/create`
            : `categories/create/${linkifyId}`
        }`,
        { title, categoryId }
      );
      toast.success("link was created");
      if (onClose) onClose();
    } catch (error) {
      if (onClose) onClose();
      toast.error("an error occured");
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>
          Add New {type === "link" ? "link" : "category"}
        </DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={title}
            type={type === "link" ? "url" : "text"}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={type === "link" ? "Paste url here" : "Category title"}
            required
          />
          <Select onValueChange={(e) => setType(e as "category" | "link")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="category">Category</SelectItem>
              <SelectItem value="link">Link</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Create {type === "link" ? "Link" : "Category"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddComponent;
