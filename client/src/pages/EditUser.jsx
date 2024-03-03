import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  console.log(formData);
  useEffect(() => {
    const fetchUser = async () => {
      const userId = params.userId;
      const res = await fetch(`/api/user/get-user/${userId}`);
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
      }
      setFormData(data);
    };
    fetchUser();
  }, []);
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
        const res = await fetch(`/api/user/update-user/${params.userId}`, {
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
      <h1 className="text-center font-bold text-2xl my-8">Update User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="User Name"
          id="username"
          onChange={handleChange}
          value={formData.username}
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
          value={formData.email}
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
          value={formData.age}
        />
        {errors.age && <span className="text-red-500 mt-5">{errors.age}</span>}
        <select
          value={formData.gender}
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
          {loading ? "Loading..." : "Update "}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default EditUser;
