import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2, RotateCcw, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { contactInfo, projectTypes } from "@/data/site-content";

interface ContactFormValues {
  fullName: string;
  organization: string;
  roleTitle: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  consent: boolean;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const fieldLabelClass =
  "text-[0.8125rem] font-semibold text-ink-foreground/90";
const errorClass = "mt-2 text-[0.8125rem] font-medium text-destructive-on-ink";

export const ContactForm = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      fullName: "",
      organization: "",
      roleTitle: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("loading");
    const { error } = await supabase.from("ecopavle_contact_requests").insert({
      full_name: values.fullName.trim(),
      organization: values.organization.trim() || null,
      role_title: values.roleTitle.trim() || null,
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      project_type: values.projectType,
      message: values.message.trim(),
      consent_habeas_data: true,
      status: "nuevo",
    });

    if (error) {
      setStatus("error");
      return;
    }

    reset();
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-ink-strong bg-ink-800 p-6 shadow-ink-card md:p-8"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary/20">
          <Check className="size-6 text-primary-bright" />
        </span>
        <h3 className="font-display text-[1.375rem] font-semibold text-ink-foreground">
          Recibimos tu solicitud
        </h3>
        <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-muted">
          Un integrante del equipo técnico revisará la información y se pondrá
          en contacto contigo en menos de 2 días hábiles.
        </p>
        <Button
          type="button"
          variant="onInk"
          onClick={() => setStatus("idle")}
        >
          <RotateCcw />
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  const isSubmitting = status === "loading";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 rounded-lg border border-ink-border bg-ink-800/70 p-6 shadow-ink-card backdrop-blur-sm md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName" className={fieldLabelClass}>
            Nombre completo <span className="text-accent">*</span>
          </Label>
          <Input
            id="fullName"
            tone="onInk"
            autoComplete="name"
            aria-invalid={Boolean(errors.fullName)}
            placeholder="Tu nombre"
            {...register("fullName", {
              required: "Ingresa tu nombre completo",
              minLength: { value: 2, message: "Ingresa tu nombre completo" },
              maxLength: { value: 120, message: "Máximo 120 caracteres" },
            })}
          />
          {errors.fullName && (
            <p className={errorClass}>{errors.fullName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="organization" className={fieldLabelClass}>
            Empresa o entidad
          </Label>
          <Input
            id="organization"
            tone="onInk"
            autoComplete="organization"
            placeholder="Nombre de la organización"
            {...register("organization", {
              maxLength: { value: 140, message: "Máximo 140 caracteres" },
            })}
          />
          {errors.organization && (
            <p className={errorClass}>{errors.organization.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="roleTitle" className={fieldLabelClass}>
            Cargo
          </Label>
          <Input
            id="roleTitle"
            tone="onInk"
            autoComplete="organization-title"
            placeholder="Tu cargo"
            {...register("roleTitle", {
              maxLength: { value: 120, message: "Máximo 120 caracteres" },
            })}
          />
          {errors.roleTitle && (
            <p className={errorClass}>{errors.roleTitle.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className={fieldLabelClass}>
            Teléfono
          </Label>
          <Input
            id="phone"
            tone="onInk"
            type="tel"
            autoComplete="tel"
            placeholder="+57 ..."
            {...register("phone", {
              maxLength: { value: 40, message: "Máximo 40 caracteres" },
            })}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className={fieldLabelClass}>
            Correo electrónico <span className="text-accent">*</span>
          </Label>
          <Input
            id="email"
            tone="onInk"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            placeholder="nombre@empresa.com"
            {...register("email", {
              required: "Ingresa tu correo electrónico",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "Ingresa un correo electrónico válido",
              },
              maxLength: { value: 160, message: "Máximo 160 caracteres" },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="projectType" className={fieldLabelClass}>
            Tipo de proyecto <span className="text-accent">*</span>
          </Label>
          <NativeSelect
            id="projectType"
            tone="onInk"
            aria-invalid={Boolean(errors.projectType)}
            defaultValue=""
            {...register("projectType", {
              required: "Selecciona el tipo de proyecto",
            })}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </NativeSelect>
          {errors.projectType && (
            <p className={errorClass}>{errors.projectType.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className={fieldLabelClass}>
          Cuéntanos tu reto <span className="text-accent">*</span>
        </Label>
        <Textarea
          id="message"
          tone="onInk"
          aria-invalid={Boolean(errors.message)}
          placeholder="Ubicación, alcance, etapa del proyecto y cualquier antecedente técnico relevante."
          {...register("message", {
            required: "Cuéntanos brevemente tu proyecto",
            minLength: {
              value: 10,
              message: "Escribe al menos 10 caracteres",
            },
            maxLength: { value: 2000, message: "Máximo 2000 caracteres" },
          })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="peer sr-only"
            aria-invalid={Boolean(errors.consent)}
            {...register("consent", {
              required: "Debes autorizar el tratamiento de datos",
            })}
          />
          <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border border-ink-strong bg-ink-700 transition-colors duration-150 peer-checked:border-primary-bright peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ink-800">
            <Check className="size-3 text-primary-foreground opacity-0 transition-opacity duration-150 peer-checked:opacity-100" />
          </span>
          <span className="text-[0.8125rem] leading-relaxed text-ink-muted">
            Autorizo a ECOPAVLE S.A.S. el tratamiento de mis datos personales
            conforme a la Ley 1581 de 2012 y su política de privacidad.
          </span>
        </label>
        {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-md border border-destructive/50 bg-destructive/[0.12] px-4 py-3 text-[0.875rem] leading-relaxed text-destructive-on-ink"
        >
          No pudimos enviar la solicitud. Intenta de nuevo o escríbenos a{" "}
          <a
            className="font-semibold underline underline-offset-4"
            href={`mailto:${contactInfo.email}`}
          >
            {contactInfo.email}
          </a>
          .
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" variant="hero" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar solicitud
              <Send />
            </>
          )}
        </Button>
        <p className="text-[0.8125rem] text-ink-muted">
          Respondemos en menos de 2 días hábiles.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
