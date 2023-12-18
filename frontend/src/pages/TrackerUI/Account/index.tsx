const Account = () => {
  return (
    <div>
      <img src="img.jpg" alt="Profile Image" />
      <p>Name</p>
      <input type="text" />
      <p>Date of birth</p>
      <input type="text" />
      <p>Email Id</p>
      <input type="text" />
      <p>Gender</p>
      <input type="text" />
      <p>Profile picture</p>
      <button>Upload Image</button>

      <button>Save</button>

      <h2>Delete account</h2>
      <p>
        Once you delete your account, all your data will be deleted. Please be
        certain
      </p>
      <button>Delete your account</button>
    </div>
  );
};

export default Account;
