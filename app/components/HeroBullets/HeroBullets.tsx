"use client";

import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Modal, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './HeroBullets.module.css';
import { useState } from 'react';

export function HeroBullets() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Modal con el video de YouTube */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Explora DEV MIND en acción"
        centered
        size="lg"
      >
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/TU_CODIGO_DE_VIDEO"
          title="Dev Mind Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '8px', border:0 }}
        ></iframe>
      </Modal>

      <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            ¡Conquista el código con <span className={classes.highlight}>DEV MIND!</span>
          </Title>
          <Text c="dimmed" mt="md">
            Explora un entorno educativo interactivo diseñado para llevar tus habilidades de programación al siguiente nivel.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="rgba(52, 152, 219, 1)">
                <IconCheck size={12} stroke={1.5}/>
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Progreso personalizado</b> – Avanza desde nivel principiante hasta avanzado con un sistema que adapta el aprendizaje a tu ritmo.
            </List.Item>
            <List.Item>
              <b>Práctica integrada</b> – Resuelve ejercicios directamente en nuestro editor de código interactivo y recibe retroalimentación inmediata.
            </List.Item>
            <List.Item>
              <b>Accesible y sostenible</b> – Disponible en dispositivos móviles con un diseño escalable y soporte para múltiples lenguajes de programación.
            </List.Item>
            <List.Item>
            <b>Impulsado por tecnología moderna</b> – Desarrollado con Flutter y Node.js, garantizando alto rendimiento y una experiencia fluida.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} onClick={() => setOpened(true)} color="rgba(231, 76, 60, 1)">
              Explorar características
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
              component="a"
              href="https://github.com/juancai0104/dev_mind/releases/download/v1.0.0/DevMind.apk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar aplicación
            </Button>
          </Group>
        </div>
        <Image
          src="/assets/devMindIddle.png"
          h={300}
          w="auto"
        />
      </div>
    </Container>

    </>
  );
}