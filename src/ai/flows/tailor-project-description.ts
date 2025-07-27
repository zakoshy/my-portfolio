'use server';

/**
 * @fileOverview A flow that tailors project descriptions to match job descriptions.
 *
 * - tailorProjectDescription - A function that tailors a project description based on a job description.
 * - TailorProjectDescriptionInput - The input type for the tailorProjectDescription function.
 * - TailorProjectDescriptionOutput - The return type for the tailorProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorProjectDescriptionInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the project description to.'),
  projectDescription: z.string().describe('The original project description.'),
  projectName: z.string().describe('The name of the project.'),
});
export type TailorProjectDescriptionInput = z.infer<
  typeof TailorProjectDescriptionInputSchema
>;

const TailorProjectDescriptionOutputSchema = z.object({
  tailoredDescription: z
    .string()
    .describe('The tailored project description.'),
});
export type TailorProjectDescriptionOutput = z.infer<
  typeof TailorProjectDescriptionOutputSchema
>;

export async function tailorProjectDescription(
  input: TailorProjectDescriptionInput
): Promise<TailorProjectDescriptionOutput> {
  return tailorProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorProjectDescriptionPrompt',
  input: {schema: TailorProjectDescriptionInputSchema},
  output: {schema: TailorProjectDescriptionOutputSchema},
  prompt: `You are an expert at tailoring project descriptions to match job descriptions.

  Given the following job description and project description, rewrite the project description to highlight the most relevant skills and experiences for the job description.

  Job Description: {{{jobDescription}}}

  Project Name: {{{projectName}}}
  Project Description: {{{projectDescription}}}

  Tailored Project Description:`,
});

const tailorProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'tailorProjectDescriptionFlow',
    inputSchema: TailorProjectDescriptionInputSchema,
    outputSchema: TailorProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
