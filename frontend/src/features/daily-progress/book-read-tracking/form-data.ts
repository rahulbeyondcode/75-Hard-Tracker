import { z, ZodType } from "zod";

type FormType = {
  book_name: string;
  page_from: string;
  page_to: string;
};

const schema: ZodType<FormType> = z.object({
  book_name: z.string().min(1, { message: "Required" }),
  page_from: z.string().min(1, { message: "Required" }),
  page_to: z.string().min(1, { message: "Required" }),
});

const defaultValues = {
  book_name: "Sasi",
  page_from: "5",
  page_to: "",
};

const formData = {
  defaultValues,
  schema,
};

export default formData;
