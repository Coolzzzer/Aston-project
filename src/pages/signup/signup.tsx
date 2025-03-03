import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@store/authSlice";
import signupStyles from "./signup.module.css";
import { User } from "@utils/types/types";
import { userSchema } from "@utils/validation/validation";
import { initialUser } from "@utils/constants/constants";
import { URLs } from "@utils/constants/constants";

export function Signup() {
  const [formData, setFormData] = useState<User>(initialUser);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = userSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path) newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    dispatch(registerUser(formData));

    navigate(URLs.HOME_PAGE);
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
