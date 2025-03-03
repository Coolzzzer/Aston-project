import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@store/authSlice";
import signinStyles from "./signin.module.css";
import { User } from "@utils/types/types";
import { userSchema } from "@utils/validation/validation";
import { initialUser } from "@utils/constants/constants";
import { URLs } from "@utils/constants/constants";

export function Signin() {
  const [formData, setFormData] = useState<Omit<User, "name">>({
    email: initialUser.email,
    password: initialUser.password,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = userSchema
      .pick({ email: true, password: true })
      .safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path) newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      dispatch(loginUser(formData as User));
      navigate(URLs.HOME_PAGE);
    } catch {
      setErrors({ general: "Неверный email или пароль" });
    }
  };

  return (
    <section className={signinStyles.section}>
      <Container maxWidth="xs">
        <Box
          sx={{ p: 5, boxShadow: 6, borderRadius: 5 }}
          className={signinStyles.box}
        >
          <Typography variant="h4" gutterBottom>
            Авторизация
          </Typography>
          <form onSubmit={handleSubmit} className={signinStyles.form}>
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
            {errors.general && (
              <Typography color="error" variant="body2">
                {errors.general}
              </Typography>
            )}
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              fullWidth
            >
              Войти
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
}
