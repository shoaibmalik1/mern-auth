// import React from 'react'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoding] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.PreventDefault();
    try {
      setLoding(true);
      setError(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      console.log(data)
      setLoding(false)
      if (data.success === false) {
        return;
      }
    } catch (error) {
      setLoding(false);
      setError(true);
    }
  };

  
  return (
    <div>
      
    </div>
  );
}
