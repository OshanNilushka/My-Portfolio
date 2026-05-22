import { createContext, useContext, useState, useCallback } from "react";
import { X } from "lucide-react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({ title, description, type = "default", duration = 5000 }) => {
      const id = Date.now() + Math.random();
      const newToast = {
        id,
        title,
        description,
        type,
      };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  
  // Return toast function alias to addToast for convenience
  return {
    toast: context.addToast,
    addToast: context.addToast,
    removeToast: context.removeToast,
    toasts: context.toasts
  };
};

const Toast = ({ id, title, description, type, onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-500/20 border-green-500"
      : type === "error"
        ? "bg-red-500/20 border-red-500"
        : type === "warning"
          ? "bg-yellow-500/20 border-yellow-500"
          : "bg-primary/20 border-primary";

  const textColor =
    type === "success"
      ? "text-green-400"
      : type === "error"
        ? "text-red-400"
        : type === "warning"
          ? "text-yellow-400"
          : "text-primary";

  return (
    <div
      className={`${bgColor} border rounded-lg p-4 flex items-start justify-between gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300`}
      role="alert"
    >
      <div className="flex-1">
        {title && <p className={`font-semibold ${textColor}`}>{title}</p>}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        aria-label="Close toast"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;
