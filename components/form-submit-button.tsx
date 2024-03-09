"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

interface FormSubmitButtonProps {
  children: React.ReactNode;
}

export const FormSubmitButton = ({
  children,
  ...rest
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button {...rest} variant="outline" size="sm" disabled={pending}>
      <div className="flex items-center space-x-1">
        {pending && "loading..."}
        {children}
      </div>
    </Button>
  );
};
