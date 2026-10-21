---
title: Multi-role SaaS Platform
description: Product ownership and full-stack execution for a multi-role event platform.
organization: KNX Technologies
role: Product Owner
publishDate: 2026-01-01
tags: [Product strategy, React, Supabase, PostgreSQL, Stripe Connect]
accent: violet
---

## The problem

Community events often rely on disconnected tools for registration, payments, communication, and administration. Organizers, instructors, DJs, and attendees each need different permissions and workflows, yet their work must stay coordinated.

The live platform is available at [knx-go.com](https://knx-go.com).

<figure class="case-image">
  <img src="/images/knx/events-discovery.png" alt="KNX events discovery screen showing event cards and filters" />
  <figcaption>Event discovery experience: browse upcoming events by region, format, and view.</figcaption>
</figure>

## My responsibilities

As product owner, I define product direction and roadmap priorities, translate user needs into product design and technical decisions, and guide integration and implementation work.

<figure class="case-image case-image-narrow">
  <img src="/images/knx/role-flow.png" alt="Diagram showing visitor, member, organizer, and administrator roles in KNX" />
  <figcaption>Role model: experiences expand from visitor to member, organizer, and platform administration.</figcaption>
</figure>

## Technical decisions and execution

I mapped the needs of each participant group into distinct roles and platform workflows. The product is built with React, Supabase and PostgreSQL, with Stripe Connect for payment capabilities. I prioritized connected foundations—event management, ticketing, permissions, messaging, administration, and integrations—so individual features support an end-to-end experience.

<figure class="case-image">
  <img src="/images/knx/community-discovery.png" alt="KNX community discovery landing screen with dance event photography" />
  <figcaption>Community discovery experience designed to connect people with local events, instructors, and dance communities.</figcaption>
</figure>

<figure class="case-image case-image-narrow">
  <img src="/images/knx/event-detail-mobile.png" alt="KNX mobile event-detail screen for Swing City Chicago" />
  <figcaption>Mobile event detail experience, including event tags and an external-listing status notice.</figcaption>
</figure>

<figure class="case-image">
  <img src="/images/knx/platform-architecture.png" alt="KNX architecture diagram connecting user roles, React application, Stripe Connect, and Supabase" />
  <figcaption>Platform architecture: React and React Query connect user workflows with Stripe Connect and Supabase services.</figcaption>
</figure>

## Outcome and lessons learned

The work established a SaaS platform with core event, payment, role, and administration workflows. Performance improvements reduced multiple high-volume payloads by more than 99% and eliminated redundant per-card requests. Product ownership reinforced the value of defining the system boundary early, sequencing dependencies deliberately, and keeping implementation choices tied to the user journey.
