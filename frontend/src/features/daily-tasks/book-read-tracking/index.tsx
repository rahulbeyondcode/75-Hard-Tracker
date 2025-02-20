import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "components/form-fields/Input";

import formData, { FormType } from "./form-data";

function BookReadTracking() {
  const { defaultValues, schema } = formData;

  const methods = useForm<FormType>({
    mode: "all",
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  const onSubmit = (formData: FormType) => {
    console.log("formData: ", formData);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <p>Enter name of the book you are reading now</p>
        <Input name="book_name" type="text" className="border" />

        <p>Enter the page numbers from where you started and stopped reading</p>
        <p>From</p>
        <Input name="page_from" type="text" className="border" />
        <p>To</p>
        <Input name="page_to" type="text" className="border" />
        <p>You have read 12 pages of Rich Dad Poor Dad today</p>

        <hr />

        <button onClick={() => {}} type="button">
          Cancel
        </button>
        <button onClick={handleSubmit(onSubmit)}>Save</button>
      </FormProvider>
    </div>
  );
}

export default BookReadTracking;
