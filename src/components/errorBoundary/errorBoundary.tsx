import { Component, ErrorInfo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import boundaryStyles from "./errorBoundary.module.css";
import { URLs } from "@utils/constants/constants";
import { ErrorBoundaryProps, ErrorBoundaryState } from "@utils/types/types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ОШИБКА: ", error, errorInfo);
  }

  handleReset = (navigate: NavigateFunction) => {
    this.setState({ hasError: false });
    navigate(URLs.HOME_PAGE, { replace: true });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

function ErrorFallback({
  onReset,
}: {
  onReset: (navigate: NavigateFunction) => void;
}) {
  const navigate = useNavigate();

  return (
    <div className={boundaryStyles.errorPage}>
      <div className={boundaryStyles.errorContainer}>
        <h1>Что-то пошло не так!</h1>
        <p>Пожалуйста, попробуйте позже.</p>
        <button
          onClick={() => onReset(navigate)}
          className={boundaryStyles.linkButton}
        >
          Вернуться на Главную
        </button>
      </div>
    </div>
  );
}
