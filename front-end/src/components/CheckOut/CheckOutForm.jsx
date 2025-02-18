const CheckOutForm = ({ handleOrder }) => {
  return (
    <form onSubmit={handleOrder} className="flex flex-col gap-5  md:w-1/2 ">
      <p className="font-bold text-2xl">Shipping Details</p>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="First name"
          className="border p-2 rounded-sm bg-slate-100 flex-1"
          required
        />
        <input
          type="text"
          placeholder="Last name"
          className="border p-2 rounded-sm bg-slate-100 flex-1"
          required
        />
      </div>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded-sm bg-slate-100 flex-1"
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          className="border p-2 rounded-sm bg-slate-100 flex-1"
          required
        />
      </div>
      <div className="flex gap-2 ">
        <input
          type="text"
          placeholder="Adress"
          className="border p-2 rounded-sm bg-slate-100 w-2/3"
          required
        />
        <select
          name="country"
          id="country"
          className="bg-slate-100 flex-1 rounded-sm p-2"
          required
        >
          <option value="country" disabled selected>
            Counrty
          </option>
          <option value="Sweden">Sweden</option>
          <option value="Norway">Norway</option>
          <option value="Denmark">Denmark</option>
          <option value="Finland">Finland</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Portugal">Portugal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Belgium">Belgium</option>
          <option value="Poland">Poland</option>
        </select>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Zip"
          className="border p-2 rounded-sm bg-slate-100 w-1/3"
          required
        />
        <input
          type="text"
          placeholder="State"
          className="border p-2 rounded-sm bg-slate-100 w-1/3"
          required
        />
        <input
          type="text"
          placeholder="City"
          className="border p-2 rounded-sm bg-slate-100 w-1/3"
          required
        />
      </div>
      <button
        type="submit"
        className="border p-2 rounded-lg bg-yellow-500 text-white font-bold "
      >
        Order
      </button>
    </form>
  );
};
export default CheckOutForm;
