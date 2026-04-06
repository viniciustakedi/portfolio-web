"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Resolver, useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { X } from "lucide-react";

import { sendPortfolioMessage } from "@/requests/post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ContactFormModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type FormValues = {
  email: string;
  name: string;
  message: string;
};

export default function ContactFormModal({
  open,
  onOpenChange,
}: ContactFormModalProps) {
  const { t } = useTranslation("contactMe");
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const resolver: Resolver<FormValues> = async (values) => {
    const errors: Record<string, { type: string; message: string }> = {};

    if (!values.email) {
      errors.email = {
        type: "required",
        message: t("form.input.email.errors.required"),
      };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = {
        type: "pattern",
        message: t("form.input.email.errors.invalidFormat"),
      };
    }

    if (!values.name) {
      errors.name = {
        type: "required",
        message: t("form.input.name.errors.required"),
      };
    }

    if (!values.message) {
      errors.message = {
        type: "required",
        message: t("form.input.message.errors.required"),
      };
    } else if (values.message.length < 10) {
      errors.message = {
        type: "minLength",
        message: t("form.input.message.errors.minLength"),
      };
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors,
    };
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  React.useEffect(() => {
    if (!open) return;
    setSent(false);
    reset();
  }, [open, reset]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const message = await sendPortfolioMessage(data);
      enqueueSnackbar(message);
      setSent(true);
    } catch {
      enqueueSnackbar(t("form.submitError"));
    } finally {
      setIsLoading(false);
    }
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={() => onOpenChange(false)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className={cn(
          "relative z-[201] w-full max-w-lg border border-border bg-background shadow-2xl",
          "rounded-t-2xl px-6 pt-6",
          "pb-[max(1.5rem,env(safe-area-inset-bottom))]",
          "sm:rounded-2xl sm:p-6 sm:pb-6"
        )}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2
              id="contact-modal-title"
              className="font-display text-2xl tracking-tight text-foreground md:text-3xl"
            >
              {t("title.part1")}
              {t("title.part2")}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {t("modalSubtitle")}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="shrink-0 rounded-full"
            onClick={() => onOpenChange(false)}
            aria-label="Close"
          >
            <X className="size-5" />
          </Button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("form.input.email.placeholder")}
            </label>
            <Input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder={t("form.input.email.placeholder")}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("form.input.name.placeholder")}
            </label>
            <Input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder={t("form.input.name.placeholder")}
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground">
              {t("form.input.message.placeholder")}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder={t("form.input.message.placeholder")}
              className={cn(
                "placeholder:text-muted-foreground flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "disabled:cursor-not-allowed disabled:opacity-50",
                errors.message && "border-destructive"
              )}
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            variant={sent ? "success" : "default"}
            size="lg"
            disabled={isLoading || sent}
            className={cn(
              "mt-4 w-full min-h-12 rounded-full text-sm font-semibold uppercase tracking-[0.2em]",
              isLoading && "cursor-wait disabled:opacity-100",
              sent && "cursor-default"
            )}
          >
            {!isLoading && !sent
              ? t("form.input.submitButton.text")
              : sent
                ? t("form.input.submitButton.success")
                : t("form.input.submitButton.loading")}
          </Button>
        </form>
      </div>
    </div>
  );
}
