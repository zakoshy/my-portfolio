"use server";

import { tailorProjectDescription, type TailorProjectDescriptionInput } from '@/ai/flows/tailor-project-description';

export async function generateTailoredDescription(input: TailorProjectDescriptionInput): Promise<{
  tailoredDescription?: string;
  error?: string;
}> {
  try {
    const result = await tailorProjectDescription(input);
    if (result.tailoredDescription) {
      return { tailoredDescription: result.tailoredDescription };
    } else {
      return { error: "The AI model could not generate a description. Please try again." };
    }
  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred while contacting the AI model. Please check the server logs." };
  }
}
