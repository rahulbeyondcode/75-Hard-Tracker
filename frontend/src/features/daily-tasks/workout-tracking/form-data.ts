import { z } from "zod";

const schema = z.object({
  preferred_workout_tracker: z.enum(["timer_auto", "timer_manual"]),
});

const defaultValues: FormType = {
  preferred_workout_tracker: "timer_auto",
};

const formData = {
  defaultValues,
  schema,
};

export type FormType = z.infer<typeof schema>;

export default formData;
