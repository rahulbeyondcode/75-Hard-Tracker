import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "components/Input";

import formData from "./form-data";

type FormType = {
  book_name: string;
  page_from: string;
  page_to: string;
};

function BookReadTracking() {
  const { defaultValues, schema } = formData;

  const methods = useForm<FormType>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState,
    formState: { errors },
    watch,
  } = methods;

  console.log("formState: ", formState);
  console.log("errors: ", errors);

  console.log("watch (book_name): ", watch("book_name"));
  console.log("watch (page_from): ", watch("page_from"));
  console.log("watch (page_to): ", watch("page_to"));

  const onSubmit = (formData: any) => {
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

        <button type="button">Cancel</button>
        <button onClick={() => handleSubmit(onSubmit)}>Save</button>
      </FormProvider>
    </div>
  );
}

export default BookReadTracking;
