import Input from "components/Input";
import formData from "./form-data";
import { FormProvider, useForm } from "react-hook-form";

function BookReadTracking() {
  const { defaultValues, schema } = formData;

  console.log("defaultValues: ", defaultValues);
  console.log("schema: ", schema);

  const methods = useForm(defaultValues);

  return (
    <div>
      <FormProvider {...methods}>
        <p>Enter name of the book you are reading now</p>
        <Input name="book_name" type="text" className="bg-red-300" />

        <p className="bg-red-300">
          Enter the page numbers from where you started and stopped reading
        </p>
        <p>From</p>
        <Input name="page_from" type="text" className="border" />
        <p>To</p>
        <Input name="page_to" type="text" className="border" />
        <p>You have read 12 pages of Rich Dad Poor Dad today</p>

        <hr />

        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </FormProvider>
    </div>
  );
}

export default BookReadTracking;
