"use client";

import { IconChevronDown } from '@tabler/icons-react';
import { Burger, Center, Container, Group, Menu, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './styles/HeaderMenu.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LinkItem {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}


const links: LinkItem[] = [
  { link: '/', label: 'Inicio' },
  // {
  //   link: '#1',
  //   label: 'Learn',
  //   links: [
  //     { link: '/docs', label: 'Documentation' },
  //     { link: '/resources', label: 'Resources' },
  //     { link: '/community', label: 'Community' },
  //     { link: '/blog', label: 'Blog' },
  //   ],
  // },
  { link: '/privacy-policy', label: 'Políticas de privacidad' },
  { link: '/contact', label: 'Contacto' },
  // {
  //   link: '#2',
  //   label: 'Support',
  //   links: [
  //     { link: '/faq', label: 'FAQ' },
  //     { link: '/demo', label: 'Book a demo' },
  //     { link: '/forums', label: 'Forums' },
  //   ],
  // },
];

export function HeaderMenu() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} onClick={() => router.push(item.link)}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Image
            src="/assets/devMindHorizontal.png"
            w="auto"
            h={50}
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/')}
          />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}