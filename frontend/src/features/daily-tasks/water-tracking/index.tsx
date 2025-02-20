import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "components/form-fields/Input";

import formData, { FormType } from "./form-data";

function WaterTracking() {
  const { defaultValues, schema } = formData;

  const methods = useForm<FormType>({
    mode: "all",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { handleSubmit, watch, setValue } = methods;

  const glassCount = Number(watch("glass_count"));

  const updateCount = (type: "add" | "remove") => {
    if (glassCount >= 0) {
      if (type === "add") {
        setValue("glass_count", String(glassCount + 1), {
          shouldValidate: true,
        });
      } else {
        const newCount = glassCount - 1;
        setValue("glass_count", String(newCount < 0 ? 0 : newCount), {
          shouldValidate: true,
        });
      }
    } else {
      setValue("glass_count", "0", { shouldValidate: true });
    }
  };

  const onSubmit = (formData: FormType) => {
    console.log("formData: ", formData);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <p>How many cups of water did you drink? (considering 1 cup = 250ml)</p>
        <button onClick={() => updateCount("remove")} type="button">
          -
        </button>
        <Input type="text" name="glass_count" allowNumbersOnly />
        <button onClick={() => updateCount("add")} type="button">
          +
        </button>

        <p>You consumed {glassCount * 0.25} litres of water</p>

        <hr />

        <button type="button">Cancel</button>
        <button onClick={handleSubmit(onSubmit)}>Save</button>
      </FormProvider>
    </div>
  );
}

export default WaterTracking;
