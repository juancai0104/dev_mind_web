import { IconDatabase, IconFileText, IconMail, IconSettings, IconShare, IconShieldCheck, IconTrash, IconUserCheck } from '@tabler/icons-react';
import { Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './PrivacyPolicy.module.css';

export const MOCKDATA = [
  {
    icon: IconDatabase,
    title: 'Información que recopilamos',
    description: [
      'Datos de registro: nombre, correo electrónico y métodos de autenticación.',
      'Datos de uso: progreso en ejercicios estadísticas de aprendizaje y configuraciones personalizadas.'
    ],
  },
  {
    icon: IconSettings,
    title: 'Uso de la información',
    description: [
      'Utilizamos tus datos únicamente para:',
      'Personalizar y mejorar tu experiencia de aprendizaje.',
      'Monitorear el progreso en la plataforma y ofrecer contenido relevante.',
      'Garantizar la seguridad y el correcto funcionamiento de la aplicación.',
      'Notificarte sobre novedades, actualizaciones y cambios importantes en la plataforma.'
    ],
  },
  {
    icon: IconShieldCheck,
    title: 'Protección de tus datos',
    description: [
      'En DEV MIND adoptamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida, uso indebido o alteración. Utilizamos cifrado para la transmisión de datos sensibles y seguimos prácticas de seguridad recomendadas en la industria.',
    ],
  },
  {
    icon: IconShare,
    title: 'Terceros',
    description: [
      'No vendemos ni compartimos tus datos personales con terceros con fines de marketing.',
      'Trabajamos con servicios de terceros únicamente para funciones esenciales, como autenticación y almacenamiento de datos en la nube. Estos servicios cumplen con estándares de privacidad y seguridad reconocidos.'
    ],
  },
  {
    icon: IconUserCheck,
    title: 'Tus derechos',
    description: [
      'Tienes el derecho de:',
      'Acceder: Solicitar información sobre los datos personales que almacenamos.',
      'Modificar: Actualizar o corregir tus datos personales.',
      'Eliminar: Solicitar la eliminación de tus datos personales en cualquier momento.',
      'Restringir: Limitar el uso de tus datos para ciertos propósitos.',
    ],
  },
  {
    icon: IconTrash,
    title: 'Cómo eliminar tus datos',
    description: [
      'Si deseas eliminar tus datos personales, puedes enviar un correo a developermind1x@gmail.com solicitando la eliminación de tu cuenta.'
    ],
  },
  {
    icon: IconFileText,
    title: 'Cambios en las políticas de privacidad',
    description: [
      'Nos reservamos el derecho de actualizar estas políticas para reflejar mejoras en la seguridad, cambios legales o funcionales en la plataforma. Notificaremos cualquier modificación importante a través de la aplicación o por correo electrónico.',
    ],
  },
  {
    icon: IconMail,
    title: 'Contacto',
    description: [
      'Si tienes dudas, inquietudes o solicitudes sobre nuestra política de privacidad, contáctanos en:',
      'Correo electrónico: developermind1x@gmail.com'
    ],
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} color="rgba(231, 76, 60, 1)"/>
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      {Array.isArray(description) ? (
        <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
          {description.map((item, index) => (
            <li key={index}>
              <Text size="sm" c="dimmed" lh={1.6}>
                {item}
              </Text>
            </li>
          ))}
        </ul>
      ) : (
        <Text size="sm" c="dimmed" lh={1.6}>
          {description}
        </Text>
      )}
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Políticas de Privacidad de DEV MIND</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          En DEV MIND valoramos y respetamos tu privacidad. Lo siguiente explica cómo recopilamos, utilizamos y protegemos tus datos personales, así como los derechos que tienes sobre ellos.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
