import signupStyles from "./signup.module.css";
import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { name: "", email: "", password: "" };

    if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно быть не меньше двух символов";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Введите правильный email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не меньше шести символов";
    }

    if (newErrors.name || newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted", formData);
  };

  return (
    <section className={signupStyles.section}>
      <Container maxWidth="xs">
        <Box
          sx={{ p: 5, boxShadow: 6, borderRadius: 5 }}
          className={signupStyles.box}
        >
          <Typography variant="h4" gutterBottom>
            Регистрация
          </Typography>
          <form onSubmit={handleSubmit} className={signupStyles.form}>
            <TextField
              sx={{ input: { color: "white" } }}
              label="Имя"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              margin="normal"
            />
            <TextField
              sx={{ input: { color: "white" } }}
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              margin="normal"
            />
            <TextField
              sx={{ input: { color: "white" } }}
              label="Пароль"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
            >
              Зарегистрироваться
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
}
