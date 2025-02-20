import { z } from "zod";

const schema = z.object({
  glass_count: z
    .string()
    .min(1, { message: "This field is required" })
    .refine((val) => {
      if (Number(val) === 0) {
        return false;
      }
      return true;
    }, "Please enter a non zero value"),
});

const defaultValues: FormType = {
  glass_count: "0",
};

const formData = {
  defaultValues,
  schema,
};

export type FormType = z.infer<typeof schema>;

export default formData;
