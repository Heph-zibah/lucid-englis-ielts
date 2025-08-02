"use client";

import React from "react";
import PageLayout from "@/layout/PageLayout";
import HeroComponent from "@/shared/HeroComponent";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email("Please enter a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = () => {
    toast.success("Message received!", {
      description:
        "Thanks for reaching out. We'll get back to you as soon as possible.",
    });

    form.reset();
  };

  const handleInvalid = () => {
    toast.error("Please fill out all required fields correctly.");
  };

  return (
    <div>
      <PageLayout>
        <main>
          <HeroComponent
            title="We’re Here to Help"
            subtitle="Have questions, feedback, or need guidance? Get in touch with the IELTS Pro Africa team today."
            backgroundImage="/images/img-2.png"
          />
          <div className="container mt-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

            <div className=" grid lg:grid-cols-2 gap-8">
              <div className="">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 w-5 h-5 text-primary" />
                    <div>
                      <h2 className="font-semibold">Email</h2>
                      <p>support@ieltsschool.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 w-5 h-5 text-primary" />
                    <div>
                      <h2 className="font-semibold">Phone</h2>
                      <p>+234 812 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 w-5 h-5 text-primary" />
                    <div>
                      <h2 className="font-semibold">Address</h2>
                      <p>123 IELTS Road, Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-10">
                  <h2 className="font-semibold text-lg">Connect with us</h2>
                  <div className="flex gap-3">
                    {socialLinks.map(({ name, href, icon: Icon, classes }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={name}
                        className={`rounded-full p-2 text-white flex items-center justify-center ${classes}`}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit, handleInvalid)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </main>
      </PageLayout>
    </div>
  );
};

export default Contact;
