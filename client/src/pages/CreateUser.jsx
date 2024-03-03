import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Please provide a username";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (formData.password.length > 20) {
      newErrors.password = "Password must be less than 20 characters";
      isValid = false;
    }

    if (formData.age && (formData.age < 18 || formData.age > 120)) {
      newErrors.age = "Age must be between 18 and 120";
      isValid = false;
    }

    if (
      formData.gender &&
      !["Male", "Female", "Other"].includes(formData.gender)
    ) {
      newErrors.gender = "Please select a valid gender";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = validateForm();
      if (isValid) {
        setLoading(true);
        const res = await fetch("/api/user/create-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          setError(data.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        setError(null);
        navigate("/user-listings");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl my-8">Create User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="User Name"
          id="username"
          onChange={handleChange}
        />
        {errors.username && (
          <span className="text-red-500 mt-5">{errors.username}</span>
        )}
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        {errors.email && (
          <span className="text-red-500 mt-5">{errors.email}</span>
        )}
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        {errors.password && (
          <span className="text-red-500 mt-5">{errors.password}</span>
        )}
        <input
          className="border p-3 rounded-lg"
          type="number"
          placeholder="Age"
          id="age"
          onChange={handleChange}
        />
        {errors.age && <span className="text-red-500 mt-5">{errors.age}</span>}
        <select
          id="gender"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        >
          <option id=" " value=" ">
            Select Gender
          </option>
          <option id="female" value="Female">
            Female
          </option>
          <option id="male" value="Male">
            Male
          </option>
          <option id="other" value="Other">
            Others
          </option>
        </select>
        {errors.gender && (
          <span className="text-red-500 mt-5">{errors.gender}</span>
        )}
        <button
          disabled={loading}
          className="bg-stone-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Create "}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default CreateUser;
