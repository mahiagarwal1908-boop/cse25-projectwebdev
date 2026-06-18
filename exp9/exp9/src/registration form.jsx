import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
  // 1. Form Inputs State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // 2. Validation Errors State
  const [errors, setErrors] = useState({});
  
  // 3. Success Message State
  const [successMessage, setSuccessMessage] = useState('');

  // 4. API Data State (Registered Users)
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 5. Fetch API Data using useEffect on component load
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=1')
      .then((response) => response.json())
      .then((data) => {
        // Map mock API data to match your requested format (ABCD - abcd@gmail.com)
        const initialUser = data.map(user => ({
          name: 'ABCD',
          email: 'abcd@gmail.com'
        }));
        setUsers(initialUser);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // 6. Form Validation Logic
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    return formErrors;
  };

  // 7. Handle Form Submission Event
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Success Pathway
      setSuccessMessage('Registration Successful!');
      
      // Append the newly registered user to the list dynamically
      setUsers([...users, { name: formData.name, email: formData.email }]);
      
      // Reset form fields
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    } else {
      // Failure Pathway
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Registration Form</h2>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name Field */}
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.password && <span style={styles.errorText}>{errors.password}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>Register</button>
        </form>

        {/* 8. Success Message Display */}
        {successMessage && <div style={styles.successText}>{successMessage}</div>}

        {/* 9. Display API & Dynamic Data */}
        <div style={styles.usersContainer}>
          <h3 style={styles.usersTitle}>Registered Users</h3>
          {isLoading ? (
            <p>Loading initial users...</p>
          ) : (
            <ul style={styles.userList}>
              {users.map((user, index) => (
                <li key={index} style={styles.userItem}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Clean inline styles matching the provided Expected Outcome layout
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '350px',
    textAlign: 'center'
  },
  title: {
    marginBottom: '25px',
    color: '#000000',
    fontSize: '24px',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #b3b3b3',
    borderRadius: '2px',
    outline: 'none'
  },
  errorText: {
    color: '#ff3333',
    fontSize: '12px',
    marginTop: '4px'
  },
  button: {
    backgroundColor: '#008000',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '3px',
    cursor: 'pointer',
    alignSelf: 'center',
    marginTop: '10px',
    width: '100px'
  },
  successText: {
    color: '#008000',
    fontWeight: 'bold',
    marginTop: '15px',
    fontSize: '15px'
  },
  usersContainer: {
    backgroundColor: '#e8f5e9',
    marginTop: '20px',
    padding: '15px',
    borderRadius: '5px',
    textAlign: 'left'
  },
  usersTitle: {
    margin: '0 0 10px 0',
    fontSize: '16px',
    textAlign: 'center',
    color: '#000000'
  },
  userList: {
    paddingLeft: '20px',
    margin: 0
  },
  userItem: {
    fontSize: '14px',
    color: '#333333',
    marginBottom: '5px'
  }
};

export default RegistrationForm;