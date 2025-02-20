import Input from "components/form-fields/Input";

const ManualTimeInput = () => {
  return (
    <div>
      <Input type="text" name="hh_time" />
      <p>hh</p>
      <Input type="text" name="mm_time" />
      <p>mm</p>
      <Input type="text" name="ss_time" />
      <p>ss</p>
    </div>
  );
};

export default ManualTimeInput;
