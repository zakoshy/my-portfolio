"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contact Form Submission from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );
    const mailtoLink = `mailto:zakayooshome254@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Please send the email from your mail client.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">Mombasa, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:zakayooshome254@gmail.com" className="text-muted-foreground hover:text-foreground">zakayooshome254@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a href="tel:+254741157757" className="text-muted-foreground hover:text-foreground">+254 741 157757</a>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                          <Input placeholder="Your Name" {...field} className="pl-10" />
                      </FormControl>
                    </div>
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
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} className="pl-10" />
                      </FormControl>
                    </div>
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
                        placeholder="Tell me about your project or inquiry..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-left">
                  <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
