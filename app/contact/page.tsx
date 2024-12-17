"use client";

import { Button, Container, Group, Loader, SimpleGrid, Textarea, TextInput, Title, Notification } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import axios from 'axios';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "El nombre es demasiado corto" : null),
      email: (value) =>
        !/^\S+@\S+$/.test(value) ? "Por favor, ingresa un correo válido" : null,
      subject: (value) =>
        value.trim().length === 0 ? "El asunto no puede estar vacío" : null,
      message: (value) =>
        value.trim().length === 0 ? "El mensaje no puede estar vacío" : null
    }
  });

  const handleSubmit = async (values: typeof form.values) => {
    setStatus("loading");
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
        values
      );

      if (response.status === 200) {
        setStatus("success");
        form.reset();
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <Container mt={50}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Contáctanos
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Nombre completo"
            placeholder="Tu nombre completo"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Correo electrónico"
            placeholder="Tu correo electrónico"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Asunto"
          placeholder="Asunto"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Mensaje"
          placeholder="Tu mensaje"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button
            type="submit"
            size="md"
            color="rgba(231, 76, 60, 1)"
            disabled={status === "loading"}
          >
            {status === "loading" ? <Loader size="xs" color="rgba(231, 76, 60, 1)"/> : "Enviar mensaje"}
          </Button>
        </Group>
      </form>

      {/* Notificaciones */}
      {status === "success" && (
        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="¡Mensaje enviado!"
          onClose={() => setStatus("idle")}
          mt="md"
        >
          Tu mensaje se envió correctamente. Te responderemos pronto.
        </Notification>
      )}
      {status === "error" && (
        <Notification
          icon={<IconX size={18} />}
          color="red"
          title="Error al enviar"
          onClose={() => setStatus("idle")}
          mt="md"
        >
          Hubo un problema al enviar tu mensaje. Intenta de nuevo más tarde.
        </Notification>
      )}
    </Container>
  );
}