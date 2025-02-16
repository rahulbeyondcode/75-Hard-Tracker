import { z } from "zod";

const schema = z.object({
  food_today: z
    .array(z.object({ id: z.string(), name: z.string() }))
    .min(1, "Select atleast one!"),
  other_food: z.string(),
  did_consume_alcohol: z.enum(["alcohol_no", "alcohol_yes"]),
  food_image: z.string(),
});

const defaultValues: FormType = {
  food_today: [],
  other_food: "",
  did_consume_alcohol: "alcohol_no",
  food_image: "",
};

const formData = {
  defaultValues,
  schema,
};

export type FormType = z.infer<typeof schema>;

export default formData;
