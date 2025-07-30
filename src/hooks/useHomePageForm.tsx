"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export const formSchema = z
  .object({
    username: z.string().min(2, "Username must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    phone_number: z
      .string()
      .min(10, "Phone number must be at least 10 digits."),
    ref_source: z.string().min(1, "Please tell us how you heard about us."),
    exam_date: z.string().min(1, "Please select your exam date."),
    test_goal: z.string().min(1, "Please tell us why you want to take IELTS."),
    other_reason: z.string().optional(),
  })
  .refine((data) => data.test_goal !== "other" || !!data.other_reason?.trim(), {
    message: "Please specify your reason",
    path: ["other_reason"],
  });

function formatDate(date: Date | undefined) {
  return date
    ? date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";
}

export function useHomePageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      phone_number: "",
      exam_date: "",
      ref_source: "",
      test_goal: "",
      other_reason: "",
    },
  });

  const testGoal = form.watch("test_goal");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const [month, setMonth] = useState<Date | undefined>();

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      setMonth(selectedDate);
      form.setValue("exam_date", formatDate(selectedDate), {
        shouldValidate: true,
      });
      setOpen(false);
    }
  };

  const onSubmit = () => {
    toast.success("You're all set!", {
      description:
        "Thanks for signing up for our IELTS classes. We’ll contact you shortly with the next steps!",
    });

    form.reset();
    setDate(undefined);
  };

  const handleInvalid = () => {
    toast.error("Please fill out all required fields correctly.");
  };

  return {
    form,
    testGoal,
    open,
    setOpen,
    date,
    setDate,
    month,
    setMonth,
    handleDateSelect,
    onSubmit,
    handleInvalid,
  };
}
