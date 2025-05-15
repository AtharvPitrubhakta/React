import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
        username: "",
        remarks: "",
        rating: 5,
    })
  }

  return (
    <div>
      <h2>Give a comment!</h2>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br></br>
        <label htmlFor="remarks">Remark:</label>
        <textarea
          placeholder="add few remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        />
        <br></br>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="rating"
          name="rating"
        />
        <br></br>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
