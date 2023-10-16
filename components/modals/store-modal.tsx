"use client";

import * as z from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
})

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      // throw new Error("x");

      const response = await axios.post('/api/store', values);
      toast.success('Store created!');

      console.log(response.data);

    } catch (error) {
      console.log('STORE_MODAL_SUBMIT', error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
    console.log(values);
    // storeModal.onClose();
  }

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Store name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="E-Commerce" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={loading}
                  variant={"outline"}
                  onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">Continue</Button>
              </div>
            </form>
          </Form>
          {/* <div className="space-y-2">
            <Label htmlFor="name">Store name</Label>
            <Input id="name" placeholder="E-Commerce" />
          </div> */}
        </div>
      </div>
    </Modal>
  );
};
