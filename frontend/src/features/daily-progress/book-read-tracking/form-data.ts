import { z } from "zod";

const schema = z.object({
  book_name: z.string().min(1, { message: "Book name is required" }),
  page_from: z.string().min(1, { message: "Enter start page" }),
  page_to: z.string().min(1, { message: "Enter end page" }),
});

const defaultValues: FormType = {
  book_name: "",
  page_from: "",
  page_to: "",
};

const formData = {
  defaultValues,
  schema,
};

export type FormType = z.infer<typeof schema>;

export default formData;
