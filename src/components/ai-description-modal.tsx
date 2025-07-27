"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { generateTailoredDescription } from "@/app/actions";
import { type Project } from "@/lib/projects";
import { Loader2, Copy, Check, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
  jobDescription: z.string().min(50, {
    message: "Job description must be at least 50 characters long.",
  }),
});

type AiDescriptionModalProps = {
  project: Project;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function AiDescriptionModal({
  project,
  isOpen,
  onOpenChange,
}: AiDescriptionModalProps) {
  const [tailoredDescription, setTailoredDescription] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: "",
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setTailoredDescription("");
    const result = await generateTailoredDescription({
      projectName: project.name,
      projectDescription: project.description,
      jobDescription: values.jobDescription,
    });

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    } else if (result.tailoredDescription) {
      setTailoredDescription(result.tailoredDescription);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(tailoredDescription);
    setIsCopied(true);
    toast({ title: "Copied to clipboard!" });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClose = (open: boolean) => {
    if (!open) {
        form.reset();
        setTailoredDescription("");
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wand2 className="text-primary" />
            AI-Powered Description Tailoring
          </DialogTitle>
          <DialogDescription>
            Tailor the description for '{project.name}' to match a specific job posting. Paste the job description below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Paste the full job description here..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                </>
              ) : (
                "Generate Tailored Description"
              )}
            </Button>
          </form>
        </Form>
        {tailoredDescription && (
          <div className="mt-6 space-y-4">
            <DialogHeader>
                <DialogTitle>Tailored Description</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-48 w-full rounded-md border bg-secondary/50 p-4">
              <p className="text-sm text-foreground whitespace-pre-wrap">{tailoredDescription}</p>
            </ScrollArea>
            <Button variant="outline" onClick={handleCopyToClipboard}>
              {isCopied ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                </>
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
